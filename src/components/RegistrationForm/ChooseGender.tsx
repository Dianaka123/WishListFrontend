import "../../styles/RegistrationFormStyles.css";

import { GenderRadio } from "./GenderRadio";

export function ChooseGender(){
    return(
        <div className="registration-field">
            <label className="registration-field-name"><b>Gender</b></label>
            
            <GenderRadio id={'male'} gender={'Male'} isChecked={true}></GenderRadio>
            <GenderRadio id={'female'} gender={'Female'}></GenderRadio>
        </div>
    )
}