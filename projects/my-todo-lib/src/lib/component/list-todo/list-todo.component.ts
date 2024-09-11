import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status, Todo } from '../../types/todo';


@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListTodo implements OnInit {
  @Input() todos?: Todo[];
  @Input() filter?: Status;
  @Output() eventToggleTodoStatus = new EventEmitter<number>()
  @Output() eventRemoveTodo = new EventEmitter<number>()

  constructor() { }
  ngOnInit() { }

  handlerToggleTodoStatus(index: number) {
    this.eventToggleTodoStatus.emit(index)
  }
  handlerRemoveTodo(index: number) {
    this.eventRemoveTodo.emit(index)
  }
}