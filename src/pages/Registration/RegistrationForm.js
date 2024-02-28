import {FullNameInput} from "../../components/RegistrationForm/FullNameInput"
import { EmailInput } from "../../components/RegistrationForm/EmailInput"
import "../../styles/RegistrationFormStyles.css"
import { BirthdayDateInput } from "../../components/RegistrationForm/BirthdayDateInput"
import { ChooseGender } from "../../components/RegistrationForm/ChooseGender"

export function RegistrationForm()
{
  return(
    <div className="modal">
      <form className="modal-content">
        <div className="container">
          <h1>Registration</h1>
          <FullNameInput/>
          <EmailInput/>
          <BirthdayDateInput/>
          <ChooseGender/>
          <button>Registrate</button>
        </div>
      </form>
    </div>
  )
}