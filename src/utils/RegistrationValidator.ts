import {RegistrationData} from "src/contexts/RegistrationContext" ;
import { DateUtilities } from "./DateUtilities";

export enum RegistrationField {
    Name,
    Email,
    Password,
}

export class RegistrationValidator{

    private static readonly registrationFieldToRegex = new Map<RegistrationField, RegExp>([
        [RegistrationField.Name, /^[a-zA-Z ]{2,30}$/],
        [RegistrationField.Email, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/],
        [RegistrationField.Password, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/],
    ]);


    public static VerifyData(data: RegistrationData) : Array<string>{
        let result: Array<string> = [];
        
        const verify = (errorMessage: string): void => {
            if(errorMessage != null || errorMessage != ""){
                result.push(errorMessage);
            }
        };

        verify(RegistrationValidator.VerifyField(RegistrationField.Email, data.email, "email"));
        verify(RegistrationValidator.VerifyField(RegistrationField.Name, data.firstName, "first name"));
        verify(RegistrationValidator.VerifyField(RegistrationField.Name, data.lastName, "last name"));
        verify(RegistrationValidator.VerifyField(RegistrationField.Password, data.password, "password"));
        verify(RegistrationValidator.VerifyBirthdayDate(data.birthDate, "birth date"));

        console.log(result);
        return result;
    }
    
    public static VerifyField(regex: RegistrationField, field: string, errorFieldName: string){
        return RegistrationValidator.registrationFieldToRegex.get(regex).test(field) ? "" : errorFieldName;
    }

    public static VerifyBirthdayDate(field: string, errorFieldName: string): string{
        const chosedData = DateUtilities.ConvertStrToDate(field);
        return chosedData < DateUtilities.todayDate && chosedData > DateUtilities.minDate ? "" : errorFieldName;
    }
}