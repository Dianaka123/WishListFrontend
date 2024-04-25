import { DataInput } from "src/components/LoginForm/DataInput";
import { LoginContext, LoginData } from "src/contexts/LoginContext";
import "../styles/FormStyles.css";
import { LoginBtn } from "src/components/LoginForm/LoginBtn";
import { Link } from "react-router-dom";
import { StylesFor } from "src/utils/StylesFor";
import { PasswordInput } from "src/components/PasswordInput";

export function LoginForm(){
    let data: LoginData = {
        email: "",
        password: "",
    }

    function setEmail(e){
        data.email = e.target.value;
    }

    function setPassword(e){
        data.password = e.target.value;
    }

    return(
        <LoginContext.Provider value={data}>
        <div className="modal">
            <form className="modal-content">
                <div className="container">
                    <h1 className="centralized-h1"> Log In </h1>
                    <DataInput label={"Email"} inputType={"email"} setData={setEmail}></DataInput>
                    <PasswordInput label={"Password"} handleChange={setPassword} isValid={true} style={StylesFor.Login}></PasswordInput>
                    <LoginBtn data={data}></LoginBtn>
                    <Link className="login-navigate-to"  to="/email-to-reset">Forget password?</Link>
                    <Link className="login-navigate-to"  to="/registration">Create account</Link>
                </div>
            </form>
        </div>
        </LoginContext.Provider>
    )
}