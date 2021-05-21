import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {todo} from './../model/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: todo[];
  constructor() {
    this.todos = [
      {
        id: '111',
        title: "learn angular",
        isComplete: false,
        date: new Date(),
      },
      {
        id: '112',
        title: "learn JS",
        isComplete: false,
        date: new Date(),
      },
      {
        id: '113',
        title: "learn html",
        isComplete: false,
        date: new Date(),
      },
      {
        id: '114',
        title: "learn CSS",
        isComplete: false,
        date: new Date(),
      }
    ]
   }

   getTodos()
   {
     return of(this.todos);
   }

   addTodos(todoo: todo)
   {
     this.todos.push(todoo);
   }

   changeStatus(todoo: todo)
   {
     this.todos.map( (singletodo) => {
       if(singletodo.id==todoo.id)
       todoo.isComplete = !todoo.isComplete;
     } );
   }

   delete(todoo: todo)
   {
     const indexoftodo = this.todos.findIndex((currentobj) => currentobj.id== todoo.id)

     this.todos.splice(indexoftodo, 1)
   }
}
