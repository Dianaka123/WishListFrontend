import { useContext, useState } from "react";
import { RegistrationContext } from "../../contexts/RegistrationContext";
import { RegistrationValidator } from "../../utils/RegistrationValidator";
import { DateUtilities } from "src/utils/DateUtilities";

export function BirthdayDateInput(){

    const data = useContext(RegistrationContext);
    const [date, setDate] = useState<string>(DateUtilities.todayDateStr);
    const [isValid, setIsValid] = useState<boolean>(true);
    let errorStyle = isValid ? "" : "input-error";
    
    function handelDate(e){
        setIsValid(RegistrationValidator.VerifyBirthdayDate(e.target.value, "birth") == "");
        setDate(e.target.value);
        data.birthDate = e.target.value;
    }

    return(
        <div className="field">
            <label className="field-name"><b>Birth date</b></label>
            <input type="date" className={"full-size-input " + errorStyle}
            value={date} onChange={handelDate} max={DateUtilities.todayDateStr} min={DateUtilities.minDateStr}></input>
        </div>
    );    
}