import { useContext, useState } from "react"
import { RegistrationContext } from "../../contexts/RegistrationContext";
import { Validator } from "./Validator";

export function RegisterButton(){

    const data = useContext(RegistrationContext);
    const [errorArray, setErrorArray] = useState<Array<string>>();

    const registerEndPoint = 'https://localhost:7035/Registration';

    function handelClick(e){
        e.preventDefault();
        const errors= Validator.VerifyData(data);
        if(errors?.length == 0){
            RegisterClick();
        }
        else{
            setErrorArray(errors);
        }
    }

    function RegisterClick(){
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body : JSON.stringify(data)
        };

        fetch(registerEndPoint, requestOptions)
        .then(response => console.log(response.status))
    }

    return(
        <div>
            {errorArray?.length > 0 && <div className="field">Wrong fields: {errorArray.toString()}</div>}
            <button type="submit" className="registration-btn" onClick={handelClick}>Register</button>
        </div>
    )
}