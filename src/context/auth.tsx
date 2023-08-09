'use client'
import { createContext, useContext, useState } from "react";
import router, { useRouter } from "next/router";

export type UserProps = {
  [x: string]: any;
  email: string,
  password: string,
}

type AuthContextProps = {
  user: UserProps | null,
  login: (user: UserProps) => void,
  logout: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>({
    email: 'diegotimao1104@gmail.com',
    password: '1234hfc'
  });

  const login = (user: UserProps) => {
    setUser(user);
    console.log(user)
  }

  const logout = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    console.log("Logout")
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
    }}>
      <>{children}</>
    </AuthContext.Provider>
  )
};

const useAuth = () => {
  const context = useContext(AuthContext)
}

export { AuthProvider, useAuth, AuthContext };