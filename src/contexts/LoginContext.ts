import { createContext } from "react";

export interface LoginData{
    email: string;
    password: string;
} 

export const LoginContext = createContext<LoginData>(null);