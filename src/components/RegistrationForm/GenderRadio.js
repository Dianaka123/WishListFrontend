import { useContext } from "react";
import { RegistrationContext } from "../../contexts/RegistrationContext";

export function GenderRadio({id, gender}){
    const data = useContext(RegistrationContext);

    function setGender(e){
        data["gender"] = e.value;
    }

    return(
        <>
            <input type="radio" id={id} name="gender" onClick={setGender}/>
            <label for={id} className="gender-label">{gender}</label>
        </>
    )
}