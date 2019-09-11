import { createSlice, PayloadAction } from 'redux-starter-kit';

export interface ToDoState {
  id?: number;
  title: string;
}

const initialState = {
  title: '',
};

export const ToDoModule = createSlice({
  slice: 'todos',
  initialState,
  reducers: {
    updateTitle: (state: ToDoState, action: PayloadAction<string>) => {
      const title = action.payload;
      return { ...state, title };
    },
  },
});
