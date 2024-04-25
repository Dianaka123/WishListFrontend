import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SuccessRegistration(){
    const endpoint = "https://localhost:7035/api/confirm-email";
    const navigate = useNavigate();

    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search);
        const token = queryParameters.get("token");

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body : JSON.stringify(token)
        };

        console.log(requestOptions)
        fetch(endpoint, requestOptions)
        .then(response => {
            if(response.status === 200){
                navigate("/login");
            }
        })
    });

    return(
        <div>
            <h1>Registration completed!</h1>
            <Link to="/login">Let's go login!</Link>
        </div>
    )
}