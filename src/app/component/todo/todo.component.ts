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

  todos :Todo[]=[]
  id:number=0
  filter:statuses=''
  newTodo:string|null=null

  setFilter(newFilter:statuses) {
     this.filter=newFilter;
  }

  addTodo(){
    if (this.newTodo?.trim()){
      console.log(this.todos);
      this.id= this.id+1;
      this.todos = [...this.todos,{id:this.id,status:'active',title:this.newTodo!}]
      this.newTodo=""
    }
  }

  removeTodo(index:number){
    const indexTodo=this.todos?.map(t=>t.id).indexOf(index)
    this.todos?.splice(indexTodo,1)
    this.todos=[...this.todos]
  }

 reverseAllTodo(){
    let tempTodo= this.todos.map((todo)=>{todo.status=todo.status==='active' ? 'completed': "active"; return todo})
    this.todos=[...tempTodo]
  }
  toggleStatusTodo(index:number){
    const indexTodo=this.todos?.map(t=>t.id).indexOf(index)
    this.todos[indexTodo].status= this.todos[indexTodo].status==='active' ? 'completed': "active"
  }
  removeTodos(){
    this.todos=[]
  }
}
