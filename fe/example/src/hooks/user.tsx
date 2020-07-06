import React, { ReactNode, useContext, useState } from 'react';

interface User {
  devTools: boolean;
  name: string;
}

type UserContext = [User];

const DEFAULT_USER: User = {
  devTools: false,
  name: 'Scotty',
};

const ctx = React.createContext<UserContext>([DEFAULT_USER]);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user] = useState(DEFAULT_USER);

  return <ctx.Provider value={[user]}>{children}</ctx.Provider>;
};

export const useUser = () => useContext(ctx);
