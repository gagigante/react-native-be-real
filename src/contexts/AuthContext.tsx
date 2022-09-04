import React, {createContext, ReactNode, useState} from 'react';
import {faker} from '@faker-js/faker';

type User = {
  name: string;
  nick: string;
  avatar: string;
};

type AuthContextData = {
  user: User;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user] = useState<User>(() => {
    return {
      name: faker.name.fullName(),
      nick: faker.word.adjective(),
      avatar: faker.image.people(640, 640),
    };
  });

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};
