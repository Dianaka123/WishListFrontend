import {CommonInput} from "../RegistrationForm/CommonInput.js"
import "../../styles/CommonStyles.css";
import { useContext } from "react";
import { RegistrationContext } from "../../contexts/RegistrationContext.js";

export function EmailInput(){
    const data = useContext(RegistrationContext);
    
    function setEmail(e){
        console.log("h")
        data["email"] = e.target.value;
    }

    return(
        <CommonInput label={'Email'} handleChange={setEmail}/>
    );
}