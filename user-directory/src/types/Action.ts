import { User } from './User';

export type Action =
  | { type: 'SET_USERS'; payload: User[] }
  | { type: 'ADD_USER'; payload: User }
  | { type: 'DELETE_USER'; payload: string };