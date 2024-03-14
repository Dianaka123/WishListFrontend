import { useState } from "react";
import "../../styles/InputStyles.css";
import "../../styles/TextStyles.css";
import { RegistrationField, RegistrationValidator } from "../../utils/RegistrationValidator";

export function NameInput({labelText, handelName}){

    const [isValid, setIsValid] = useState(true);

    var inputStyle = isValid ? "input" : "input input-error";

    function validateName(name){
        setIsValid(RegistrationValidator.VerifyField(RegistrationField.Name, name));
    }

    return(
        <div className="input-with-description">
                <input
                className={inputStyle}
                onChange={(e) => {
                    validateName(e.target.value);
                    handelName(e.target.value);
                }}
                />
                <label className="name-label">{labelText}</label>
        </div>
    )
}