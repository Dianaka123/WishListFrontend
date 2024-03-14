import { useContext } from "react";
import { CommonInput } from "./CommonInput";
import { RegistrationContext } from "../../contexts/RegistrationContext";

export function PasswordsInput(){
    const data = useContext(RegistrationContext);
    
    function setPassword(e){
        data.password = e.target.value;
    }
    
    return(
        <>
            <CommonInput label={'Password'} handleChange={setPassword}/>
            <CommonInput label={'Confirm Password'}/>
        </>
    )
}