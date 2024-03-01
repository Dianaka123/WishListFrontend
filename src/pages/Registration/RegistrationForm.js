import {FullNameInput} from "../../components/RegistrationForm/FullNameInput"
import { EmailInput } from "../../components/RegistrationForm/EmailInput"
import { BirthdayDateInput } from "../../components/RegistrationForm/BirthdayDateInput"
import { ChooseGender } from "../../components/RegistrationForm/ChooseGender"
import { PasspordsInput } from "../../components/RegistrationForm/PasswordsInput"
import "../../styles/RegistrationFormStyles.css"
import { RegisterButton } from "../../components/RegistrationForm/RegisterButton"

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
          <PasspordsInput/>
          <RegisterButton/>
        </div>
      </form>
    </div>
  )
}