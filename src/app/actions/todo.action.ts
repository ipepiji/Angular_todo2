import { Action } from '@ngrx/store';

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export class AddTodo implements Action {
    readonly type = ADD_TODO;

    constructor(public payload: string) { };
}

export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;

    constructor(public payload: string) { };
}

export class UpdateTodo implements Action {
    readonly type = UPDATE_TODO;

    constructor(public payload: Object) { };
}

export type Actions = AddTodo | DeleteTodo | UpdateTodo;