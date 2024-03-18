import { createContext } from 'react';

export interface RegistrationData 
{
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    gender: string;
    password: string;
}

export const RegistrationContext = createContext<RegistrationData>(null);
