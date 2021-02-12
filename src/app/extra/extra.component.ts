import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../app.state';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

  todos: Observable<Todo[]>;
  completedItems: number = 0;

  constructor(private store: Store<AppState>) {
    this.todos = this.store.select('todos');
    this.todos.subscribe(arr => {
      this.completedItems = arr.filter(todo => todo.isCompleted).length
    });
  }

  ngOnInit(): void {
  }

}
