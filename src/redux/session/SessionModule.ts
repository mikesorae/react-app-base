import { createSlice, PayloadAction } from 'redux-starter-kit';
import { Session, LoggedIn } from '../../models/auth/Session';

const updateSession = (_: Session, action: PayloadAction<LoggedIn>): Session => action.payload;
const clearSession = (_session: Session, _action: PayloadAction<void>): Session => 'guest';

export const SessionModule = createSlice({
  slice: 'session',
  initialState: 'guest' as Session,
  reducers: {
    updateSession,
    clearSession,
  },
});
