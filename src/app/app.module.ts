import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Todos } from './component/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { ListItemComponent } from './component/listTodo/list-item/list-item.component';
import { FilterTodoPipe } from './pipe/filter-todo.pipe';
import { ListTodo } from './component/listTodo/list-Todo.component';


@NgModule({
  declarations: [
    AppComponent,
    Todos,
    ListTodo,
    ListItemComponent,
    FilterTodoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
