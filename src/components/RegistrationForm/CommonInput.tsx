export function CommonInput({label, type = "text", handleChange = null, isValid = true}){

    let errorStyle = isValid ? "" : "input-error";

    return(
    <div className="field">
        <div className="field-name">
            <label><b> {label} </b></label>
        </div>
        
        <input className={"full-size-input " + errorStyle} type={type} onChange={handleChange}></input>        
    </div>
)
}