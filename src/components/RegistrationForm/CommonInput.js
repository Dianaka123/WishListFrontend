export function CommonInput({label}){
return(
    <div className="field">
        <div className="field-name">
            <label><b> {label} </b></label>
        </div>
        
        <input className="full-size-input"></input>
    </div>
)
}