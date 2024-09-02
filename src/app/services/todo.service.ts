import { Injectable } from '@angular/core';

import { Todo } from '../types/todo';
import { BehaviorSubject } from 'rxjs';
import { toggleStatus } from '../utilites/toogleStatus';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  id: number = 0
  private todos = new BehaviorSubject<Todo[]>([]);

  constructor() { }

  get todos$() {
    return this.todos.asObservable();
  }
  updateTodo(newState: Todo[]) {
    this.todos.next(newState);
  }
  addTodo(newTodo: string) {
    if (newTodo?.trim()) {
      this.id = this.id + 1;
      this.todos.next([...this.todos.value, { id: this.id, status: 'active', title: newTodo }])
    }
  }
  removeTodo(id: number) {
    const indexTodo = this.todos.value.map(t => t.id).indexOf(id)
    const tempTodo = this.todos.value
    tempTodo.splice(indexTodo, 1)
    this.todos.next([...tempTodo])
  }
  reverseAllTodo() {
    const tempTodo = this.todos.value.map((todo) => { todo.status = toggleStatus(todo.status); return todo })
    this.todos.next([...tempTodo])
  }
  toggleStatusTodo(id: number) {
    const newTodos = this.todos.value.map((todo) => {
      todo.id === id && (todo.status = toggleStatus(todo.status))
      return todo
    })
    this.todos.next([...newTodos])
  }
  removeTodos() {
    this.todos.next([])
  }
}
