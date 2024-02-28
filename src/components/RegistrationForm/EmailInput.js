import "../../styles/CommonStyles.css";
import "../../styles/EmailInputStyles.css";

export function EmailInput(){
    return(
        <div className="field">
            <div className="field-name"><label><b> Email </b></label></div>
            <input className="email-input"></input>
        </div>
    );
}