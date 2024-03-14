import {RegistrationData} from "src/contexts/RegistrationContext" ;

export enum RegistrationField {
    Name,
    Email,
    Password,
}

export class Validator{

    private static readonly registrationFieldToRegex = new Map<RegistrationField, RegExp>([
        [RegistrationField.Name, /^[a-zA-Z ]{2,30}$/],
        [RegistrationField.Email, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/],
        [RegistrationField.Password, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/],
    ]);
    
    private static readonly nowDate = new Date();
    public static readonly todayStr = [
        Validator.nowDate.getFullYear(),
        Validator.padTo2Digits(Validator.nowDate.getMonth() + 1),
        Validator.padTo2Digits(Validator.nowDate.getDate()),
      ].join('-');
    private static readonly minYear = Validator.nowDate.getFullYear() - 120;
    public static readonly minDateStr = Validator.minYear + "-01-01";


    public static VerifyData(data: RegistrationData) : Array<string>{
        let result: Array<string> = [];
        
        const verify = (errorMessage: string): void => {
            if(errorMessage != null || errorMessage != ""){
                result.push(errorMessage);
            }
        };

        verify(Validator.VerifyField(RegistrationField.Email, data.email, "email"));
        verify(Validator.VerifyField(RegistrationField.Name, data.firstName, "first name"));
        verify(Validator.VerifyField(RegistrationField.Name, data.lastName, "last name"));
        verify(Validator.VerifyField(RegistrationField.Password, data.password, "password"));
        verify(Validator.VerifyBirthdayDate(data.birthDate, "birth date"));

        console.log(result);
        return result;
    }
    
    public static VerifyField(regex: RegistrationField, field: string, errorFieldName: string){
        return Validator.registrationFieldToRegex.get(regex).test(field) ? "" : errorFieldName;
    }

    public static VerifyBirthdayDate(field: string, errorFieldName: string): string{
        const chosedData = new Date(field);
        const minDate = new Date(Validator.minDateStr);
        return chosedData < Validator.nowDate && chosedData > minDate ? "" : errorFieldName;
    }

    private static padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
    }
}