import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/types/todo';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListItemComponent implements OnInit {

  @Input() todo?: Todo;

  @Output() eventToggleTodoStatus = new EventEmitter<number>()
  @Output() eventRemoveTodo = new EventEmitter<number>()

  isEdit = false

  ////для outsideClick
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isEdit = false
    }
  }
  constructor(private eRef: ElementRef) {
    this.isEdit = true
  }

  ngOnInit() { }

  toggleIsEdit() {
    this.isEdit = !this.isEdit
  }
  rerender() {
    console.log('render', this.todo?.id);
  }

  handlerToggleTodoStatus(index: number) {
    this.eventToggleTodoStatus.emit(index)
  }

  handlerRemoveTodo(index: number) {
    this.eventRemoveTodo.emit(index)
  }

}
