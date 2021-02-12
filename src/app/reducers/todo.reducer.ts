import { Todo } from '../models/todo.model';
import * as TodoActions from '../actions/todo.action';
import { v1 as uuid } from 'uuid';

const initialState: Todo[] = [
    {
        id: uuid(),
        title: "Add date created on right side of todo task",
        dateCreated: 1610546400,
        isCompleted: true
    },
    {
        id: uuid(),
        title: "Sort the task by date and reverse - create a button which will change the sort by date order",
        dateCreated: 1610719200,
        isCompleted: false
    },
    {
        id: uuid(),
        title: "Show total task on bottom left: if 2 complete, and 3 items left, show: '3/5 items left'",
        dateCreated: 1610460000,
        isCompleted: false
    },
    {
        id: uuid(),
        title: "Do not add if task has the same name",
        dateCreated: 1610632800,
        isCompleted: true
    }
];

export function todosReducer(state: Todo[] = initialState, action: any) {
    switch (action.type) {
        case TodoActions.ADD_TODO: {
            if (!state.filter((todo: Todo) => todo.title.toLowerCase().trim() === action.payload.toLowerCase().trim()).length) {
                const newItem = {
                    id: uuid(),
                    title: action.payload,
                    dateCreated: Math.floor(Date.now() / 1000),
                    isCompleted: false
                };

                const newArr = [
                    ...state,
                    newItem
                ];

                return newArr;
            }
            else {
                alert("Task already exist!");
                return state;
            }
        }

        case TodoActions.DELETE_TODO: {
            return state.filter((todo: Todo) =>
                todo.id !== action.payload
            )
        }

        case TodoActions.UPDATE_TODO: {
            const updatedState: Todo[] = state.map((todo: Todo) => {
                if (todo.id === action.payload.id) {
                    if (action.payload.hasOwnProperty('title')) {
                        if (!state.filter((todo) => todo.title.toLowerCase().trim() === action.payload.toLowerCase().trim()).length)
                            todo.title = action.payload.title;
                        else {
                            alert("Same task!");
                        }
                    }
                    else {
                        todo.isCompleted = !todo.isCompleted
                    }
                }

                return todo;
            })
            return updatedState;
        }

        default:
            return state;
    }
}