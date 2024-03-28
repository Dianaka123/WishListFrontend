import { useState } from "react";

export function PasswordInput({label, handleChange , isValid, style}){
    const [isHide, setIsHide] = useState(true);

    const viewImgSource = '/view.png';
    const showPasswordType = "text";

    const hideImgSource = '/hide.png';
    const hidePasswordType = "password";

    let errorStyle = isValid ? "" : "input-error";
    let imgSource = isHide ? hideImgSource : viewImgSource;
    let passwordType = isHide ? hidePasswordType : showPasswordType;

    function ChangeVisibility(){
        console.log(isHide);
        setIsHide(!isHide);
    }

    return(
    <div className={`${style}-field`}>
        <div className={`${style}-field-name`}>
            <label><b> {label} </b></label>
        </div>
        
        <input className={`${style}-input full-size-input ${errorStyle}"`} type={passwordType} onChange={handleChange}></input>        
        <img className="password-img" src={imgSource} onClick={ChangeVisibility} ></img>
    </div>);
}