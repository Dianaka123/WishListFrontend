import "../../styles/CommonStyles.css";

export function EmailInput(){
    return(
        <div className="field">
            <div className="field-name"><label><b> Email </b></label></div>
            <input className="full-size-input"></input>
        </div>
    );
}