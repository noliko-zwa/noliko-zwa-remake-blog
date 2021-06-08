import { createContext } from "react";

export interface Context {
  title: string;
  menu: string[];
  works: object[];
  contact: string;
}

export const AppContext = createContext<Context>();
