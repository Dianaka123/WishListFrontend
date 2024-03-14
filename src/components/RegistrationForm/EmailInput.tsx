import {CommonInput} from "./CommonInput"
import "../../styles/CommonStyles.css";
import { useContext, useState } from "react";
import { RegistrationContext } from "../../contexts/RegistrationContext";
import { RegistrationField, RegistrationValidator } from "../../utils/RegistrationValidator";

export function EmailInput(){
    const [isValid, setIsValid] = useState(true);

    var inputStyle = isValid ? "input" : "input input-error";
    const data = useContext(RegistrationContext);
    
    function setEmail(e){
        data.email = e.target.value;
        validateEmail(e.target.value);
    }

    function validateEmail(email: string){
        const error = RegistrationValidator.VerifyField(RegistrationField.Email, email, "email");
        setIsValid(error == "");
    }

    return(
        <CommonInput label={'Email'} handleChange={setEmail} isValid={isValid}/>
    );
}