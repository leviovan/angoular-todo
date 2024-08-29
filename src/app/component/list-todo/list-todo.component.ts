import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status, Todo } from 'src/app/types/todo';


@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
})

export class ListTodo implements OnInit {
  @Input() todos!: Todo[];
  @Input() filter!: Status;
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