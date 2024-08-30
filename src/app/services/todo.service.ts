import { Injectable } from '@angular/core';

import { Todo } from '../types/todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos = new BehaviorSubject<Todo[]>([]);

  constructor() { }

  get todos$() {
    return this.todos.asObservable();
  }
  updateTodo(newState: Todo[]) {
    this.todos.next(newState);
  }
}
