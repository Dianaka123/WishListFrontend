import { useContext, useState } from "react";
import { RegistrationContext } from "../../contexts/RegistrationContext";
import { Validator } from "./Validator";

export function BirthdayDateInput(){

    const data = useContext(RegistrationContext);
    const [date, setDate] = useState<string>(Validator.todayStr);
    const [isValid, setIsValid] = useState<boolean>(true);
    let errorStyle = isValid ? "" : "input-error";
    
    function handelDate(e){
        setIsValid(Validator.VerifyBirthdayDate(e.target.value, "birth") == "");
        setDate(e.target.value);
        data.birthDate = e.target.value;
    }
    
    function padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
    }

    return(
        <div className="field">
            <label className="field-name"><b>Birth date</b></label>
            <input type="date" className={"full-size-input " + errorStyle}
            value={date} onChange={handelDate} max={Validator.todayStr} min={Validator.minDateStr}></input>
        </div>
    );    
}