import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {todo} from './../../model/todo'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

TodoService
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos :todo[];
  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
    this.todoservice.getTodos().subscribe((todos) =>{
      this.todos = todos;
    })
  }

  deletetodo(todo: todo)
  {
    this.todoservice.delete(todo);
  }

  changestat(todo: todo)
  {
    this.todoservice.changeStatus(todo);
  }

}
