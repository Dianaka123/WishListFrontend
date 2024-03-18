import { useState } from "react";
import { RegistrationField, RegistrationValidator } from "../../utils/RegistrationValidator";
import "../../styles/RegistrationFormStyles.css";

export function NameInput({labelText, handelName}){
    const [isValid, setIsValid] = useState(true);

    var inputStyle = isValid ? "" : "input-error";

    function validateName(name){
        setIsValid(RegistrationValidator.VerifyField(RegistrationField.Name, name));
    }

    return(
        <div className="input-with-description">
                <input
                className={"registration-input " + inputStyle}
                onChange={(e) => {
                    const name = e.target.value.trim();
                    validateName(name);
                    handelName(name);
                }}
                />
                <label className="name-label">{labelText}</label>
        </div>
    )
}