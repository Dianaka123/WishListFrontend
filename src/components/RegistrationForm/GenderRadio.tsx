import { useContext } from "react";
import { RegistrationContext } from "../../contexts/RegistrationContext";

export function GenderRadio({id, gender}){
    const data = useContext(RegistrationContext);

    function setGender(){
        data.gender = id;
    }

    return(
        <>
            <input type="radio" id={id} name="gender" onClick={setGender}/>
            <label htmlFor={id} className="gender-label">{gender}</label>
        </>
    )
}