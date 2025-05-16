// src/types.ts

export type User = {
  id: string;
  name: string;
  email: string;
  age: number;
};

export type Action =
  | { type: 'ADD_USER'; payload: User }
  | { type: 'REMOVE_USER'; payload: string }
  | { type: 'SET_USERS'; payload: User[] };
