import { createSlice, PayloadAction } from 'redux-starter-kit';

export interface ToDo {
  id?: number;
  title: string;
}

const initialState: { todos: ToDo[] } = {
  todos: [],
};

export const ToDoModule = createSlice({
  slice: 'todos',
  initialState,
  reducers: {
    addTodo: ({ todos }: { todos: ToDo[] }, action: PayloadAction<ToDo>) => {
      const todo = action.payload;
      return { todos: [...todos, todo] };
    },
  },
});
