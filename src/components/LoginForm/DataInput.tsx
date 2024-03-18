import "../../styles/LoginFormStyles.css"

export function DataInput({label, inputType, setData}){
    return(
        <div className="login-field">
            <div className="login-field-name">
                <label><b> {label} </b></label>
            </div>
            
            <input className="login-input full-size-input" type={inputType} onChange={setData}></input>        
        </div>
        );
}