import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { statuses, Todo } from '../todo/todo.component';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})

export class ListTodo implements OnInit {
  @Input() todos!: Todo[];
  @Input() filter!: statuses;
  @Output() eventToggleStatusTodo = new EventEmitter<number>()
  @Output() eventRemoveTodo = new EventEmitter<number>()
  
  constructor() { }
  ngOnInit() { }

  handlerToggleStatusTodo(index: number) {
    this.eventToggleStatusTodo.emit(index)
  }
  handlerRemoveTodo(index: number) {
    this.eventRemoveTodo.emit(index)
  }
}