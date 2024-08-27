import { Component } from '@angular/core';

interface Todo{
  id:number
  title:string,
  status:'active'| 'complited'
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})

export class Todos  {
  
  private todos :Todo[]=[]
  private id:number=0
  newTodo:string|null=null

  getTodos(){
    return this.todos
  }
  
  addTodo(){
    console.log(this.todos);
    this.id=+
    this.todos?.push({id:this.id,status:'active',title:this.newTodo!})
  }

  removeTodo(index:number){
    this.todos?.splice(index,1)
  }
}
