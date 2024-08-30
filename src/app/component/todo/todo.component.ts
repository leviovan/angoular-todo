import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Status, Todo } from 'src/app/types/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class Todos implements OnInit{


  id: number = 0
  filter: Status = ''
  newTodo: string | null = null
  todos:Todo[]=[]
  constructor(private todoService:TodoService){

  }
  ngOnInit(): void {
    this.todoService.todos$.subscribe(newState => {
      this.todos = newState;
    });
    
  } 

  @Output() eventToggleTodoStatus = new EventEmitter<number>()
  @Output() eventRemoveTodo = new EventEmitter<number>()

  setFilter(newFilter: Status) {
    this.filter = newFilter;
  }

  addTodo() {
    if (this.newTodo?.trim()) {
      this.id = this.id + 1;
      this.todoService.updateTodo([...this.todos,{ id: this.id, status: 'active', title: this.newTodo}])
      this.newTodo = ''
    }
  }

  removeTodo(index: number) {
    const indexTodo = this.todos.map(t => t.id).indexOf(index)
    this.todos.splice(indexTodo, 1)
     this.todoService.updateTodo([...this.todos])
  }
  reverseAllTodo() {
   let tempTodo = this.todos.map((todo) => { todo.status = todo.status === 'active' ? 'completed' : 'active'; return todo })
    this.todoService.updateTodo([...tempTodo])
  }
  toggleStatusTodo(id: number) {
    const newTodos = this.todos.map((todo) => {
      todo.id === id && (todo.status = todo.status === 'active' ? 'completed' : 'active')
      return todo
    })
    this.todoService.updateTodo([...newTodos])
  }
  removeTodos() {
     this.todoService.updateTodo([])
  }
  isActiveClass(currentFilter: Status) {
    return !!(this.filter === currentFilter)
  }
}
