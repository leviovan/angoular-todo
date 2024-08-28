import { Component } from '@angular/core';



export type statuses='active'| 'completed'|''

export interface Todo{
  id:number
  title:string,
  status:statuses,
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls:['./todo.component.scss']
})

export class Todos  {

  private _todos :Todo[]=[]
  private _id:number=0
  private _filter:statuses=''

  newTodo:string|null=null

  get todos(){
    return this._todos
  }
  get filter(){
    return this._filter
  }
  setFilter(newFilter:statuses) {
     this._filter=newFilter;
  }
  addTodo(){
    if (this.newTodo?.trim()){
      console.log(this.todos);
      this._id= this._id+1;
      this._todos = [...this._todos,{id:this._id,status:'active',title:this.newTodo!}]
     
      this.newTodo=""
    }
  }
  removeTodo(index:number){
    this._todos?.splice(index,1)
    this._todos=[...this._todos]
  }
  toggleStatusTodo(index:number){
    console.log(index);
    

    this._todos[index].status= this._todos[index].status==='active' ? 'completed': "active"
  }
}
