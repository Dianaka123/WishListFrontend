export function CommonInput({label, handleChange = null, isValid = true}){

    let errorStyle = isValid ? "" : "input-error";

    return(
    <div className="field">
        <div className="field-name">
            <label><b> {label} </b></label>
        </div>
        
        <input className={"full-size-input " + errorStyle} onChange={handleChange}></input>
    </div>
)
}