import { Component } from '@angular/core';
import { Status, Todo } from 'src/app/types/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class Todos {

  todos: Todo[] = []
  id: number = 0
  filter: Status = ''
  newTodo: string | null = null

  setFilter(newFilter: Status) {
    this.filter = newFilter;
  }

  addTodo() {
    if (this.newTodo?.trim()) {
      console.log(this.todos);
      this.id = this.id + 1;
      this.todos = [...this.todos, { id: this.id, status: 'active', title: this.newTodo! }]
      this.newTodo = ''
    }
  }

  removeTodo(index: number) {
    const indexTodo = this.todos?.map(t => t.id).indexOf(index)
    this.todos?.splice(indexTodo, 1)
    this.todos = [...this.todos]
  }
  reverseAllTodo() {
    let tempTodo = this.todos.map((todo) => { todo.status = todo.status === 'active' ? 'completed' : 'active'; return todo })
    this.todos = [...tempTodo]
  }
  toggleStatusTodo(id: number) {
    const newTodos = this.todos.map((todo) => {
      todo.id === id && (todo.status = todo.status === 'active' ? 'completed' : 'active')
      return todo
    })
    this.todos = [...newTodos]
  }
  removeTodos() {
    this.todos = []
  }
  isActiveClass(currentFilter: Status) {
    return !!(this.filter === currentFilter)
  }
}
