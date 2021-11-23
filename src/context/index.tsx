import React, { ReactNode, createContext } from "react";
import { AuthProvider } from "./auth-context";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

interface IHomeContext {
  currentSwiperIndex: number;
  show: boolean;
  handleCloseCardList: (index: number) => void;
  setShow: React.Dispatch<boolean>;
  setCurrentDate: React.Dispatch<string>;
  setCurrentSwiperIndex: React.Dispatch<number>;
}
export const homeContext = createContext<IHomeContext | undefined>(undefined);
