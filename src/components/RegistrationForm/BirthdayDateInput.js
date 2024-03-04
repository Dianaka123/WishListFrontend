import { useContext } from "react";
import { RegistrationContext } from "../../contexts/RegistrationContext";

export function BirthdayDateInput(){
    const data = useContext(RegistrationContext);

    function handelDate(e){
        console.log(e.target.value)
        data['birthDate'] = e.target.value;
    }
    
    return(
        <div className="field">
            <label className="field-name"><b>Birth date</b></label>
            <input className="full-size-input" type="date" onChange={handelDate}></input>
        </div>
    );    
}