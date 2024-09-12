import { Injectable } from '@angular/core';
import { Todo } from '../types/todo';
import { BehaviorSubject } from 'rxjs';
import { toggleStatus } from '../utilites/toogleStatus';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private todos = new BehaviorSubject<Todo[]>([]);

  constructor(private http: HttpClient) { }

  get todos$() {
    const todosLocal = localStorage.getItem('angular-todo/todos')
    this.todos.next(todosLocal ? JSON.parse(todosLocal) : [])
    return this.todos.asObservable();
  }

  addTodo(newTodo: string) {
    if (newTodo?.trim()) {
      this.http.post<Todo[]>('', { newTodo: newTodo }).subscribe(res => res)
    }
    this.todos.next(JSON.parse(localStorage.getItem('angular-todo/todos')!))
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
