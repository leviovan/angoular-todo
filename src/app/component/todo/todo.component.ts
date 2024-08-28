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
  public newTodo:string|null=null

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
    const indexTodo=this._todos?.map(t=>t.id).indexOf(index)
    this._todos?.splice(indexTodo,1)
    this._todos=[...this._todos]
  }

 reverseAllTodo(){
    let tempTodo= this._todos.map((todo)=>{todo.status=todo.status==='active' ? 'completed': "active"; return todo})
    console.log(tempTodo);
    
    this._todos=[...tempTodo]
  }
  toggleStatusTodo(index:number){
    const indexTodo=this._todos?.map(t=>t.id).indexOf(index)
    this._todos[indexTodo].status= this._todos[indexTodo].status==='active' ? 'completed': "active"
  }
  removeTodos(){
    this._todos=[]
  }
}
