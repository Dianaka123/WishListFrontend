import "../../styles/InputStyles.css";
import "../../styles/TextStyles.css";
import { GenderRadio } from "./GenderRadio";

export function ChooseGender(){
    return(
        <div className="field">
            <label className="field-name"><b>Gender</b></label>
            
            <GenderRadio id={'male'} gender={'Male'}></GenderRadio>
            <GenderRadio id={'female'} gender={'Female'}></GenderRadio>
        </div>
    )
}