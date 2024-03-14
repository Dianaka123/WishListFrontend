import { useState } from "react";
import "../../styles/InputStyles.css";
import "../../styles/TextStyles.css";
import { RegistrationField, Validator } from "./Validator";

export function NameInput({labelText, handelName}){

    const [isValid, setIsValid] = useState(true);

    var inputStyle = isValid ? "input" : "input input-error";

    function validateName(name){
        const error = Validator.VerifyField(RegistrationField.Name, name, "name");

        setIsValid(error == "");
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