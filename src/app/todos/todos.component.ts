import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../app.state';
import * as TodoActions from '../actions/todo.action';
import { map } from 'rxjs/operators';

import { EventProxyService } from '../services/event-proxy.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(private store: Store<AppState>, private service: EventProxyService) {
    this.todos = this.store.select('todos')
      .pipe(map((todos: Todo[]) =>
        this.sortByDate([...todos])
      ));
    this.service.getToggleDateEvent().subscribe(() => {
      this.toggleDate();
    })
  }

  public toggleCompleted(id: string): void {
    this.store.dispatch(new TodoActions.UpdateTodo({ id }));
  }

  public deleteTodo(id: string): void {
    this.store.dispatch(new TodoActions.DeleteTodo(id));
  }

  public updateTodo(id: string, title: string): void {
    const updateItem: any = prompt("Update", title)?.trim();
    if (updateItem)
      this.store.dispatch(new TodoActions.UpdateTodo({ id, title: updateItem }));
    else if (updateItem !== undefined)
      alert("Empty field!");
  }

  public formattedDate(date: number): string {
    return new Date(date * 1000).toLocaleDateString('en-GB')
  }

  public sortByDate(todos: Todo[]): Todo[] {
    return todos.sort((a: Todo, b: Todo) => {
      return a.dateCreated - b.dateCreated;
    })
  }

  public toggleDate(): void {
    this.todos = this.todos.pipe(map((todos: Todo[]) => todos.reverse()));
  }

  ngOnInit(): void {
  }

}
