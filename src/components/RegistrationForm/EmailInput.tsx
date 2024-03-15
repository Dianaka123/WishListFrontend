import { useContext, useState } from "react";
import { RegistrationContext } from "../../contexts/RegistrationContext";
import { RegistrationField, RegistrationValidator } from "../../utils/RegistrationValidator";
import "../../styles/RegistrationFormStyles.css";

export function EmailInput(){
    const [isValid, setIsValid] = useState(true);
    const data = useContext(RegistrationContext);

    let errorStyle = isValid ? "" : "input-error";

    function setEmail(e){
        data.email = e.target.value;
        validateEmail(e.target.value);
    }

    function validateEmail(email: string){
        setIsValid(RegistrationValidator.VerifyField(RegistrationField.Email, email));
    }


    return(
    <div className="registration-field">
        <div className="registration-field-name">
            <label><b> Email </b></label>
        </div>
        
        <input className={"registration-input full-size-input " + errorStyle} type="email" onChange={setEmail}></input>        
    </div>
    );
}