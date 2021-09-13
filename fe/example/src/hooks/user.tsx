import React, { Dispatch, ReactNode, SetStateAction, useContext } from 'react';

import { USERS, User } from '../data/users';

import { useLocalStorage } from './localStorage';

interface Preferences {
  devTools: boolean;
}

type UserContextTuple = [UserContext, Dispatch<SetStateAction<UserContext>>];

type UserContext = ClientContext | ServerContext;

export interface ExtendedClientContext extends ClientContext {
  setPreferences: (preferences: Partial<Preferences>) => void;
  setUser: (user: Partial<User>) => void;
}

export interface ClientContext {
  server: false;

  preferences: Preferences;
  user: User;
}

export interface ServerContext {
  server: true;

  preferences?: undefined;
  user?: undefined;
}

const DEFAULT_CLIENT_CONTEXT: UserContext = {
  server: false,
  preferences: {
    devTools: true,
  },
  user: USERS[0],
};

const DEFAULT_SERVER_CONTEXT: UserContext = {
  server: true,
};

const ctx = React.createContext<UserContextTuple>([
  DEFAULT_SERVER_CONTEXT,
  () => undefined,
]);

interface Props {
  children: ReactNode;
  server: boolean;
}

export const UserProvider = ({ children, server }: Props) => {
  const [userContext, setUserContext] = useLocalStorage(
    'user',
    server ? DEFAULT_SERVER_CONTEXT : DEFAULT_CLIENT_CONTEXT,
  );

  return (
    <ctx.Provider value={[userContext, setUserContext]}>
      {children}
    </ctx.Provider>
  );
};

export const useUser = () => useContext(ctx);

export const useClient = () => {
  const tuple = useUser();

  return augmentClient(tuple);
};

export const augmentClient = ([
  userContext,
  setUserContext,
]: UserContextTuple) => {
  if (userContext.server) {
    throw Error('augmentClient is not supported on server renders');
  }

  const setClient = setUserContext as Dispatch<SetStateAction<ClientContext>>;

  const setPreferences = (preferences: Partial<Preferences>) =>
    setClient((client) => ({
      ...client,
      preferences: {
        ...client.preferences,
        ...preferences,
      },
    }));

  const setUser = (user: Partial<User>) =>
    setClient((client) => ({
      ...client,
      user: {
        ...client.user,
        ...user,
      },
    }));

  return Object.assign(userContext, {
    setPreferences,
    setUser,
  });
};
