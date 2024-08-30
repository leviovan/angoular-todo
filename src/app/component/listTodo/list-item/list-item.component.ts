import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../todo/todo.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls:['./list-item.component.scss']
})

export class ListItemComponent implements OnInit {
  
  @Input() toggleStatus!:(i:number)=>void;
  @Input() removeTodo!:(i:number)=>void;
  @Input() todo!:Todo ;
  @Input() i!:number ;
  @Output() eventToggleStatusTodo = new EventEmitter<number>()
  @Output() eventRemoveTodo = new EventEmitter<number>()

  private _isEdit=false

  constructor() { }
  ngOnInit() { }

  get isEdit(){
      return this._isEdit
  }
  toggleIsEdit(){
    console.log("work");
    
    this._isEdit= !this._isEdit
  }

  handlerToggleStatusTodo(index: number) {
    this.eventToggleStatusTodo.emit(index)
  }
  handlerRemoveTodo(index: number) {
    this.eventRemoveTodo.emit(index)
  }
}
