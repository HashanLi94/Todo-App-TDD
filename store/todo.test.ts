import { setActivePinia, createPinia } from "pinia";
import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
} from "vitest";
import { useTodoStore } from "./index";

beforeAll(() => {
  setActivePinia(createPinia());
});

describe("useTodoStore", () => {
  let store: ReturnType<typeof useTodoStore>;

  beforeEach(() => {
    store = useTodoStore();
  });
  afterEach(() => {
    store.$reset();
  });

  test("creates a store", () => {
    const store = useTodoStore();
    expect(store).toBeDefined();
  });

  test("initializes with an empty array", () => {
    expect(store.items).toStrictEqual([]);
  });

  test("create a todo", () => {
    store.addTodo({ title: "test title" });
    expect(store.items[0]).toBeDefined();
    expect(store.items[0]?.title).toBe("test title");
  });

  test("get todo by id", () => {
    store.addTodo({ title: "test title" });

    const item = store.items[0];
    // @ts-ignore
    const todo = store.getTodoById(item.id);

    expect(todo).toStrictEqual(item);
  });

  test("get ordered todos by date without mutating store", () => {
    const items = [
      {
        createdAt: new Date(2021, 1, 5),
      },
      {
        createdAt: new Date(2019, 1, 5),
      },
      {
        createdAt: new Date(2020, 1, 5),
      },
    ];

    // @ts-ignore
    store.items = items;

    const orderedTodos = store.getOrderedTodos;
    // @ts-ignore
    expect(orderedTodos[0].createdAt.getFullYear()).toBe(2019);
    // @ts-ignore
    expect(orderedTodos[1].createdAt.getFullYear()).toBe(2020);
    // @ts-ignore
    expect(orderedTodos[2].createdAt.getFullYear()).toBe(2021);
    // @ts-ignore
    expect(store.items[0].createdAt.getFullYear()).toBe(2021);
  });
});
