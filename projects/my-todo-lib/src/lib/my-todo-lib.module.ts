import { NgModule } from '@angular/core';
import { MyTodoLibComponent } from './my-todo-lib.component';
import { Todos } from './component/todo/todo.component';
import { ListTodo } from './component/list-todo/list-todo.component';
import { ListItemComponent } from './component/list-todo/list-item/list-item.component';
import { FilterTodoPipe } from './pipe/filter-todo.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorServices } from './services/httpIntersaptor.service';




@NgModule({
  declarations: [
    MyTodoLibComponent,
    Todos,
    ListTodo,
    ListItemComponent,
    FilterTodoPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    MyTodoLibComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorServices, multi: true }
  ]
})
export class MyTodoLibModule { }
