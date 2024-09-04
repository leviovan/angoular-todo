import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Status, Todo } from 'src/app/types/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Todos implements OnInit {

  id: number = 0
  filter: Status = ''
  newTodo: string | null = null
  todos: Todo[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.todos$.subscribe(newState => {
      this.todos = newState;
    })
  }

  @Output() eventToggleTodoStatus = new EventEmitter<number>()
  @Output() eventRemoveTodo = new EventEmitter<number>()

  setFilter(newFilter: Status) {
    this.filter = newFilter;
  }
  addTodo(newTodo: string) {
    this.todoService.addTodo(newTodo)
    this.newTodo = ''
  }
  removeTodo(index: number) {
    this.todoService.removeTodo(index)
  }
  reverseAllTodo() {
    this.todoService.reverseAllTodo()
  }
  toggleStatusTodo(id: number) {
    this.todoService.toggleStatusTodo(id)
  }
  removeTodos() {
    this.todoService.removeTodos()
  }
  isActiveClass(currentFilter: Status) {
    return !!(this.filter === currentFilter)
  }
}
