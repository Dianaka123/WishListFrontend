export function CommonInput({label, handleChange}){
return(
    <div className="field">
        <div className="field-name">
            <label><b> {label} </b></label>
        </div>
        
        <input className="full-size-input" onChange={handleChange}></input>
    </div>
)
}