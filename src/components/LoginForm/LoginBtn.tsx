import { useNavigate } from "react-router-dom";

export function LoginBtn({data}){
    const navigate = useNavigate();
    const loginEndPoint = 'https://localhost:7035/api/login';

    function handelClick(e){
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body : JSON.stringify(data)
        };

        fetch(loginEndPoint, requestOptions)
        .then(response => {
            if(response.status == 200){
                navigate("/wish-list")
            }
        });
    }

    return(
        <div className="login-field">
            <button className="login-btn" type="submit" onClick={handelClick}> Log In </button>
        </div>
    );
}