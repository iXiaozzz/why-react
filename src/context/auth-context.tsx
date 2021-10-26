import React, { ReactNode, useState, useEffect } from "react";

interface iUser {
  name: string;
  token?: string;
  [key: string]: any;
}

interface iAuthForm {
  username: string;
  password: string;
}
const AuthContext = React.createContext<{ 
  user: iUser | null,
  login: (form: iAuthForm)=> void,
  logout: ()=> void
} | undefined>(
  undefined
);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<iUser | null>(null);

  const login = (form: iAuthForm) => {
    const userInfo = { name: "iXiaozzz", token: "1024" };
    setUser(userInfo);
  };
  const logout = () => {
    const userEmpty = { name: "", token: "" };
    setUser(userEmpty);
  };
  // useEffect(() => {
  //   setUser({ name: "iXiaozzz", token: "" });
  // }, [children]);
  return (
    <AuthContext.Provider children={children} value={{ user, login, logout }} />
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
