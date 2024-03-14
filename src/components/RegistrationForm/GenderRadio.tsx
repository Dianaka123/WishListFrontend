import { useContext, useEffect } from "react";
import { RegistrationContext } from "../../contexts/RegistrationContext";

export function GenderRadio({id, gender, isChecked = false}){
    const data = useContext(RegistrationContext);

    useEffect(() => {
        if(isChecked){
            data.gender = id;
        }
    },[data]);

    function setGender(){
        data.gender = id;
    }

    return(
        <>
            <input type="radio" id={id} name="gender" onClick={setGender} defaultChecked={isChecked}/>
            <label htmlFor={id} className="gender-label">{gender}</label>
        </>
    )
}