import { createStore, combineReducers } from 'redux';
import { ToDoModule } from './todos/ToDoModule';

const rootReducer = combineReducers({
  todos: ToDoModule.reducer,
});

export const store = createStore(rootReducer);
