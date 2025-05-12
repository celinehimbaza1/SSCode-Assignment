import React, { createContext, useReducer, ReactNode } from 'react';

export type User = {
  id: string;
  name: string;
  age: number;
};

type Action =
  | { type: 'ADD_USER'; payload: User }
  | { type: 'REMOVE_USER'; payload: string };

interface UserContextType {
  state: { users: User[] };
  dispatch: React.Dispatch<Action>;
}

const initialState = {
  users: [] as User[],  // Initialize users as an empty array of User type
};

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { users: [...state.users, action.payload] };
    case 'REMOVE_USER':
      return { users: state.users.filter(user => user.id !== action.payload) };
    default:
      return state;
  }
};

export const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
