import { useContext } from "react"
import { RegistrationContext } from "../../contexts/RegistrationContext";

export function RegisterButton(){

    const data = useContext(RegistrationContext);

    function handelClick(e){
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body : JSON.stringify(data)
        };

        console.log(requestOptions.body);
        fetch('https://localhost:7035/Registration', requestOptions)
        .then(response => console.log(response.status))
    }

    return(
        <div>
            <button type="submit" className="registration-btn" onClick={handelClick}>Register</button>
        </div>
    )
}