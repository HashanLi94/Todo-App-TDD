import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export interface Todo {
  id: String;
  title: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoState {
  items: Todo[] | undefined[];
}

export interface NewTodo {
  title: string;
}

export interface updateTodo {
  title?: string;
  isCompleted?: boolean;
}

// return value as TodoState
const state = (): TodoState => ({
  items: [],
});

const getters = {
  // get todo by id
  getTodoById: (state: TodoState) => (id: String) => {
    // @ts-ignore
    return state.items.find((todo: Todo) => todo.id === id);
  },
  // set the orders by date
  getOrderedTodos: (state: TodoState) =>
    [...state.items].sort(
      (a: Todo, b: Todo) => a.createdAt.getTime() - b.createdAt.getTime()
    ),
};

const actions = {
  // Add todo
  addTodo(partialTodo: NewTodo) {
    const todo: Todo = {
      id: uuid(),
      ...partialTodo,
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    // @ts-ignore
    this.items.push(todo);
  },

  //   remove todo
  removeTodo(id: String) {
    // @ts-ignore
    this.items = this.items.filter((todo: Todo) => todo.id !== id);
  },

  //   update todo
  updateTodo(id: String, todo: updateTodo) {
    // @ts-ignore
    this.items = this.items.map((item: Todo) => {
      if (item.id === id) {
        return {
          ...item,
          ...todo,
          updatedAt: new Date(),
        };
      } else {
        return item;
      }
    });
  },
};

export const useTodoStore = defineStore("todoStore", {
  state,
  getters,
  actions,
});
