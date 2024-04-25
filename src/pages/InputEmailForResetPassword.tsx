import { useNavigate } from "react-router-dom";
import { DataInput } from "src/components/LoginForm/DataInput";

export function InputEmailForResetPassword(){
    const navigate = useNavigate();
    const emailResetPasswordEndpoint = 'https://localhost:7035/api/email-reset-password'

    var data = {
        email: "",
        resetPasswordUrl: "http://localhost:3000/change-password",
    }

    function SetEmail(e){
        data.email = e.target.value;
    }

    function handelClick(e){
        e.preventDefault();
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body : JSON.stringify(data)
        };

        fetch(emailResetPasswordEndpoint, requestOptions)
        .then(response => {
            if(response.status == 200){
                navigate("/check-email")
            }
        });
    }

    return(
        <div className="modal">
            <form className="modal-content">
                <div className="container">
                    <h1 className="centralized-h1"> Enter your email</h1>
                    <DataInput label={"Email"} inputType="text" setData={SetEmail}></DataInput>
                    <div>
                        <button type="submit" className="registration-btn" onClick={handelClick} >Send link to email</button>
                    </div>
                </div>
            </form>
        </div>
    )
}