import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../app.state';

import { EventProxyService } from '../services/event-proxy.service';
@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

  todos: Observable<Todo[]>;
  completedItems: number = 0;

  constructor(private store: Store<AppState>, private services: EventProxyService) {
    this.todos = this.store.select('todos');
    this.todos.forEach((arr: Todo[]) => {
      this.completedItems = arr.filter((todo: Todo) => todo.isCompleted).length
    });
  }

  public toggleDate(): void {
    this.services.sendToggleDateEvent();
  }

  ngOnInit(): void {
  }

}
