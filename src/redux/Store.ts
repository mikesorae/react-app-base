import { createStore, combineReducers } from 'redux';
import { SessionModule } from './session/SessionModule';
import { ToDoModule } from './todos/ToDoModule';

const rootReducer = combineReducers({
  session: SessionModule.reducer,
  todos: ToDoModule.reducer,
});

export const store = createStore(rootReducer);
