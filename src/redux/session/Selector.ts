import { AppState } from "../AppState";
import { useSelector } from "react-redux";

export const useSession = () => useSelector((state: AppState) => state.session);
export const useTodos = () => useSelector((state: AppState) => state.todos);