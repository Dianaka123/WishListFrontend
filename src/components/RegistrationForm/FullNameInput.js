import "../../styles/CommonStyles.css";
import { NameInput } from "./NameInput";

export function FullNameInput()
{
    return(
        <div className="field">
            <div className="field-name"><label><b> Name </b></label></div>

            <NameInput labelText={'First Name'}></NameInput>
            <NameInput labelText={'Last Name'}></NameInput>
        </div>
    )
}