import { useContext, useState } from "react";
import { CommonInput } from "./CommonInput";
import { RegistrationContext } from "../../contexts/RegistrationContext";
import { RegistrationField, RegistrationValidator } from "src/utils/RegistrationValidator";

export function PasswordsInput(){
    const data = useContext(RegistrationContext);
    const [isPasswordsEqual, setIsPasswordsEqual] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    
    function setPassword(e){
        data.password = e.target.value;
        setIsPasswordValid(RegistrationValidator.VerifyField(RegistrationField.Password, data.password));
    }
    
    function comparePasswords(e){
        setIsPasswordsEqual(data.password === e.target.value);
    }

    return(
        <>
            <CommonInput label={'Password'} type={"password"} handleChange={setPassword} isValid={isPasswordValid}/>
            <CommonInput label={'Confirm Password'} type={"password"} handleChange={comparePasswords} isValid={isPasswordsEqual}/>
        </>
    )
}