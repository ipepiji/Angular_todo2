import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../app.state';
import * as TodoActions from '../actions/todo.action';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {

  todos: Observable<Todo[]>;
  newTodoForm = this.formBuilder.group({
    title: null,
  });

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {
    this.todos = this.store.select('todos');
  }

  public onSubmit(): void {
    const title: string = this.newTodoForm.value.title?.trim();
    if (title)
      this.store.dispatch(new TodoActions.AddTodo(title));
    else
      alert("Empty field!");

    this.newTodoForm.reset();
  }

  ngOnInit(): void {
  }

}
