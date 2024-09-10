import {
  UserDoc,
  auth,
  getUserData,
  signOutCurrentUser,
} from '@/utils/firebase';
import { User } from 'firebase/auth';
import { createContext, useCallback, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

interface IUserContext {
  user: User | null | undefined;
  userDoc: UserDoc | null;
  loading: boolean;
  error: Error | undefined;
  signOut: () => Promise<void>;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  userDoc: null,
  loading: false,
  error: undefined,
  signOut: async () => {},
});

export function UserProvider({ children }: any) {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState<UserDoc | null>(null);

  const signOut = useCallback(async () => {
    await signOutCurrentUser();
    setUserData(null);
  }, []);

  useEffect(() => {
    async function getData() {
      if (!user) {
        setUserData(null);
        return;
      }
      const profile = await getUserData(user.uid);
      setUserData(profile);
    }
    getData();
  }, [user]);

  const value: IUserContext = {
    user,
    userDoc: userData,
    loading,
    error,
    signOut,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
