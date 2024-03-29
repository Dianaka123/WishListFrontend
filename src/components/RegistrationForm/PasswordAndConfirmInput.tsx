import { useContext, useState } from "react";
import { RegistrationContext } from "../../contexts/RegistrationContext";
import { RegistrationField, RegistrationValidator } from "src/utils/RegistrationValidator";
import { PasswordInput } from "../PasswordInput";
import { StylesFor } from "src/utils/StylesFor";

export function PasswordAndConfirmInput(){
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
            <PasswordInput label={'Password'} handleChange={setPassword} isValid={isPasswordValid} style={StylesFor.Register}/>
            <PasswordInput label={'Confirm Password'} handleChange={comparePasswords} isValid={isPasswordsEqual} style={StylesFor.Register}/>
        </>
    )
}