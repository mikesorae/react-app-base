import { useSelector } from 'react-redux';
import { AppState } from './AppState';

export const useSession = () => useSelector((state: AppState) => state.session);
export const useTodos = () => useSelector((state: AppState) => state.todos);
