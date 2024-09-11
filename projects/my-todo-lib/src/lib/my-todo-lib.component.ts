import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-todo-lib',
  template: `
    <app-todo></app-todo>
  `,
  styles: [
  ]
})
export class MyTodoLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
