import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Todos } from './component/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { FilterTodoPipe } from './pipe/filter-todo.pipe';
import { ListTodo } from './component/list-todo/list-todo.component';
import { ListItemComponent } from './component/list-todo/list-item/list-item.component';

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
