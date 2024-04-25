import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ConfirmationEmailData } from "src/contexts/RegistrationContext";

export function CheckEmail(){

    const sendConfirmationEmailEndPoint = 'https://localhost:7035/api/send-confirmation-email';

    let location = useLocation();
    let data: ConfirmationEmailData = {
        email:  location.state.key,
        url: "http://localhost:3000/confirm-email",
    }

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body : JSON.stringify(data)
        };
    
        fetch(sendConfirmationEmailEndPoint, requestOptions)
    });


    return(
        <div><h1>Check your email and open the link we sent to continue. </h1></div>
    );
}