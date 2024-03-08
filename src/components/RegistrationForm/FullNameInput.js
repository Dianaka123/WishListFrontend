import "../../styles/CommonStyles.css";
import { useContext } from 'react';
import { NameInput } from "./NameInput";
import { RegistrationContext } from "../../contexts/RegistrationContext";

export function FullNameInput()
{
    const data = useContext(RegistrationContext);

    function handelFirstName(name){
        console.log(data)
        data['firstName'] = name;
    }

    function handelSecondName(name){
        console.log(data)
        data['secondName'] = name;
    }

    return(
        <div className="field">
            <div className="field-name"><label><b> Name </b></label></div>

            <NameInput labelText={'First Name'} handelName={handelFirstName} ></NameInput>
            <NameInput labelText={'Last Name'} handelName={handelSecondName}></NameInput>
        </div>
    )
}