import { Component } from '@angular/core';



export type statuses='active'| 'complited'|''

export interface Todo{
  id:number
  title:string,
  status:statuses
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})

export class Todos  {
  
  private _todos :Todo[]=[]
  private id:number=0
  newTodo:string|null=null

  get getTodos(){
    return this._todos
  }
  
  addTodo(){
    this.id=+1;
    this._todos = [...this._todos,{id:this.id,status:'active',title:this.newTodo!}]
    this.newTodo=""
  }

  removeTodo(index:number){
    this._todos?.splice(index,1)
  }
  toggleStatusTodo(index:number){

      this._todos[index].status= this._todos[index].status==='active' ? 'complited': "active"
      console.log(this._todos[index].status);
      
  }
}
