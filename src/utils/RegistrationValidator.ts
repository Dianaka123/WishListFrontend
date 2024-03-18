import {RegistrationData} from "src/contexts/RegistrationContext" ;
import { DateUtilities } from "./DateUtilities";

export enum RegistrationField {
    Name,
    Email,
    Password,
}

export class RegistrationValidator{

    private static readonly registrationFieldToRegex = new Map<RegistrationField, RegExp>([
        [RegistrationField.Name, /^[A-Z][a-zA-Z]{2,}$/],
        [RegistrationField.Email, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/],
        [RegistrationField.Password, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/],
    ]);


    public static VerifyData(data: RegistrationData) : Array<string>{
        let result: Array<string> = [];
        
        const verify = (errorMessage: string): void => {
            if(errorMessage != null){
                console.log(errorMessage)
                result.push(errorMessage);
            }
        };

        verify(RegistrationValidator.VerifyFieldWithError(RegistrationField.Email, data.email, " email"));
        verify(RegistrationValidator.VerifyFieldWithError(RegistrationField.Name, data.firstName, " first name"));
        verify(RegistrationValidator.VerifyFieldWithError(RegistrationField.Name, data.lastName, " last name"));
        verify(RegistrationValidator.VerifyFieldWithError(RegistrationField.Password, data.password, " password"));
        verify(RegistrationValidator.VerifyBirthdayDate(data.birthDate, " birth date"));

        console.log(result);
        console.log(data.gender);
        return result;
    }
    
    public static VerifyFieldWithError(regex: RegistrationField, field: string, errorFieldName: string): string | null{
        return RegistrationValidator.VerifyField(regex, field) ? null : errorFieldName;
    }

    public static VerifyField(regex: RegistrationField, field: string): boolean{
        return RegistrationValidator.registrationFieldToRegex.get(regex).test(field);
    }

    public static VerifyBirthdayDate(field: string, errorFieldName: string): string | null {
        const chosedData = DateUtilities.ConvertStrToDate(field);
        return chosedData < DateUtilities.todayDate && chosedData > DateUtilities.minDate ? null : errorFieldName;
    }
}