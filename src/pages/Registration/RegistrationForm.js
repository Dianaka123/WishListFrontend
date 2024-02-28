import {FullNameInput} from "../../components/RegistrationForm/FullNameInput"
import { EmailInput } from "../../components/RegistrationForm/EmailInput"
import "../../styles/RegistrationFormStyles.css"
import { BirthdayDateInput } from "../../components/RegistrationForm/BirthdayDateInput"

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
          <button>Registrate</button>
        </div>
      </form>
    </div>
  )
}