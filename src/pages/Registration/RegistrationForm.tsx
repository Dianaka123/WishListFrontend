import {FullNameInput} from "../../components/RegistrationForm/FullNameInput"
import { EmailInput } from "../../components/RegistrationForm/EmailInput"
import { BirthdayDateInput } from "../../components/RegistrationForm/BirthdayDateInput"
import { ChooseGender } from "../../components/RegistrationForm/ChooseGender"
import { PasswordsInput } from "../../components/RegistrationForm/PasswordsInput"
import "../../styles/RegistrationFormStyles.css"
import { RegisterButton } from "../../components/RegistrationForm/RegisterButton"
import { RegistrationContext, RegistrationData } from "../../contexts/RegistrationContext"

export function RegistrationForm()
{
  let data: RegistrationData = {
    email: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    password: "",
  };

  return(
    <RegistrationContext.Provider value={data}>
        <div className="modal">
          <form className="modal-content">
            <div className="container">
              <h1>Registration</h1>
              <FullNameInput/>
              <EmailInput/>
              <BirthdayDateInput/>
              <ChooseGender/>
              <PasswordsInput/>
              <RegisterButton/>
            </div>
          </form>
        </div>
    </RegistrationContext.Provider>
  )
}