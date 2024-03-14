import "../../styles/CommonStyles.css";
import { useContext } from 'react';
import { NameInput } from "./NameInput";
import { RegistrationContext } from "../../contexts/RegistrationContext";

export function FullNameInput()
{
    const data = useContext(RegistrationContext);
    
    function handelFirstName(name){
        data.firstName = name;
    }

    function handelSecondName(name){
        data.lastName = name;
    }

    return(
        <div className="field">
            <div className="field-name"><label><b> Name </b></label></div>

            <NameInput labelText={'First Name'} handelName={handelFirstName} ></NameInput>
            <NameInput labelText={'Last Name'} handelName={handelSecondName}></NameInput>
        </div>
    )
}