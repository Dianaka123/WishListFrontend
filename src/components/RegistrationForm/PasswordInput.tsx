import { useState } from "react";

export function PasswordInput({label, handleChange , isValid}){
    
    const [isHide, setIsHide] = useState(true);

    let errorStyle = isValid ? "" : "input-error";

    const viewImgSource = '/view.png';
    const showPasswordType = "text";

    const hideImgSource = '/hide.png';
    const hidePasswordType = "password";

    const imgSource = isHide ? hideImgSource : viewImgSource;
    const passwordType = isHide ? hidePasswordType : showPasswordType;

    function ChangeVisibility(){
        console.log(isHide);
        setIsHide(!isHide);
    }

    return(
    <div className="field">
        <div className="field-name">
            <label><b> {label} </b></label>
        </div>
        
        <input className={"full-size-input " + errorStyle} type={passwordType} onChange={handleChange}></input>        
        <img className="password-img" src={imgSource} onClick={ChangeVisibility} ></img>
    </div>);
}