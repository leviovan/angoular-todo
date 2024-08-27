import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Todos } from './component/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { ListItemComponent } from './component/listTodo/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    Todos,
    ListItemComponent
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
