"use client";

import { useUser } from "@clerk/nextjs";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext<{ userData: any } | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [userData, setUserData] = useState(null);
  const email = user?.primaryEmailAddress?.emailAddress;

  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.post(
        "http://localhost:3000/api/users/auth",
        { email }
      );
      const data = response.data?.data[0];
      setUserData(data);
    };
    if (isLoaded && isSignedIn) getUserData();
  }, [isLoaded, email]);
  return (
    <AuthContext.Provider value={{ userData }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
