import { Injectable } from '@angular/core';

import { Todo } from '../types/todo';
import { BehaviorSubject } from 'rxjs';
import { toggleStatus } from '../utilites/toogleStatus';

@Injectable({
  providedIn: 'root'
})

export class TodoService {


  private todos = new BehaviorSubject<Todo[]>([]);

  constructor() { }

  get todos$() {
    return this.todos.asObservable();
  }
  addTodo(newTodo: string) {
    if (newTodo?.trim()) {
      this.todos.next([...this.todos.value, { id: Date.now(), status: 'active', title: newTodo }])
    }
  }

  removeTodo(id: number) {
    const tempTodo = this.todos.value.filter(t => t.id !== id)
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
