import { create } from "zustand";
import {
  createJSONStorage,
  devtools,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
  category: string;
};

type State = {
  todos: Todo[];
};

type Actions = {
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  markDone: (id: string) => void;
  clearTodos: () => void;
  getActiveTodos: () => Todo[];
  getCompletedTodos: () => Todo[];
};

export const useTodoStore = create<State & Actions>()(
  devtools(
    persist(
      subscribeWithSelector(
        // begin immer
        immer((set, get) => ({
          todos: [],
          addTodo: (todo: Todo) => {
            set((state) => {
              state.todos.push(todo);
            });
          },
          removeTodo: (id: string) => {
            set((state) => {
              state.todos = state.todos.filter((todo) => todo.id !== id);
            });
          },
          markDone: (id: string) => {
            set((state) => {
              const todo = state.todos.find((todo) => todo.id === id);
              if (todo) {
                todo.completed = !todo.completed;
              }
            });
          },
          getActiveTodos: () => {
            return get().todos.filter((todo) => !todo.completed);
          },
          getCompletedTodos() {
            return get().todos.filter((todo) => todo.completed);
          },
          clearTodos: () => {
            set((state) => {
              state.todos = [];
            });
          },
        }))
        // end immer
      ),
      // end subscribeWithSelector
      {
        name: "todos-storage",
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
);
