import { useState } from "react";
import "../../styles/InputStyles.css";
import "../../styles/TextStyles.css";

export function NameInput({labelText, handelName}){

    const [isValid, setIsValid] = useState(true);

    const regex = /^[a-zA-Z ]{2,30}$/;
    var inputStyle = isValid ? "input" : "input input-error";

    function validateName(name){
        let isNameValid = regex.test(name);

        setIsValid(isNameValid);
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