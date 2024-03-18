import { useContext, useState } from "react"
import { RegistrationContext } from "../../contexts/RegistrationContext";
import { RegistrationValidator } from "../../utils/RegistrationValidator";
import { Link } from "react-router-dom";

export function RegisterButton(){
    const data = useContext(RegistrationContext);
    const [errorArray, setErrorArray] = useState<Array<string>>();

    const registerEndPoint = 'https://localhost:7035/Registration';

    function handelClick(e){
        e.preventDefault();
        const errors= RegistrationValidator.VerifyData(data);
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
            {errorArray?.length > 0 && <div className="registration-field"><b style={{color: "red"}}>Wrong fields:{errorArray.toString()}</b></div>}
            <button type="submit" className="registration-btn" onClick={handelClick}>Register</button>
            <Link className="link-to-login"  to="/login">Already redistrated? Go to Login.</Link>
        </div>
    )
}