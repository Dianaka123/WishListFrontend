import { DataInput } from "src/components/LoginForm/DataInput";
import { LoginContext, LoginData } from "src/contexts/LoginContext";
import "../styles/FormStyles.css";
import { LoginBtn } from "src/components/LoginForm/LoginBtn";

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
                    <DataInput label={"Password"} inputType={"text"} setData={setPassword}></DataInput>
                    <LoginBtn data={data}></LoginBtn>
                </div>
            </form>
        </div>
        </LoginContext.Provider>
    )
}