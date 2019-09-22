import { Session } from '../models/auth/Session';
import { ToDo } from './todos/ToDoModule';

export interface AppState {
  session: Session,
  todos: ToDo[],
}
