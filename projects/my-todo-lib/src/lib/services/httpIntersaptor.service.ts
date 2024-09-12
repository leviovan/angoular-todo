import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpParamsOptions, HttpContextToken } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../types/todo';


@Injectable()
export class HttpInterceptorServices implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const todoStr = localStorage.getItem('angular-todo/todos');
    let todos = (todoStr ? JSON.parse(todoStr) : [])

    todos = [...todos, { id: Date.now(), status: 'active', title: req.body.newTodo }]
    localStorage.setItem('angular-todo/todos', JSON.stringify(todos))

    return next.handle(req);
  }
}