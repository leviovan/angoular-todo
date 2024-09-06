import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTodoLibModule } from "../../projects/my-todo-lib/src/lib/my-todo-lib.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyTodoLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
