import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../app.state';
import * as TodoActions from '../actions/todo.action';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos = this.store.select('todos');
  }

  toggleCompleted(id: string) {
    this.store.dispatch(new TodoActions.UpdateTodo({ id }));
  }

  deleteTodo(id: string) {
    this.store.dispatch(new TodoActions.DeleteTodo(id));
  }

  formattedDate(date: number) {
    return new Date(date * 1000).toLocaleDateString('en-GB')
  }

  ngOnInit(): void {
  }

}
