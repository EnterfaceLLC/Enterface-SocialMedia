import { CognitoUser } from 'amazon-cognito-identity-js';
import { createContext, ReactNode, useState, Dispatch, SetStateAction, useContext, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Hub } from 'aws-amplify';
import { HubCallback } from '@aws-amplify/core';

type UserType = CognitoUser | null | undefined;

type AuthContextType = {
  user: UserType,
  setUser: Dispatch<SetStateAction<UserType>>;
};

const AuthContext = createContext<AuthContextType>({ user: undefined, setUser: () => { } });

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>(undefined);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
        setUser(authUser);
      } catch (err) {
        setUser(null);
      }
    };
    checkUser();
  }, []);

  useEffect(() => {
    const listener: HubCallback = data => {
      console.log(data);
      const { event } = data.payload;
      if (event === 'signOut') {
        setUser(null);
      }
    };
    Hub.listen('auth', listener);

    return () => Hub.remove('auth', listener);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
