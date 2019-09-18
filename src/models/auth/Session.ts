export interface User {
  id: string,
  name: string,
}
export interface LoggedIn {
  principal: User,
  token: string,
}

export type Session = LoggedIn | 'guest';