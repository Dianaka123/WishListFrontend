export function CommonInput({label, onChange}){
return(
    <div className="field">
        <div className="field-name">
            <label><b> {label} </b></label>
        </div>
        
        <input className="full-size-input" onChange={onChange}></input>
    </div>
)
}