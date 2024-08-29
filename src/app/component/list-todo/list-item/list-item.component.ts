import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
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
  
  isEdit=false

  ////для outsideClick
  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
         this.isEdit=false
    }
  }
  constructor(private eRef: ElementRef) {
     this.isEdit=true
  }

  ngOnInit() { }

  toggleIsEdit(){
    this.isEdit= !this.isEdit
  }
  handlerToggleStatusTodo(index: number) {
    this.eventToggleStatusTodo.emit(index)
  }
  handlerRemoveTodo(index: number) {
    this.eventRemoveTodo.emit(index)
  }
}
