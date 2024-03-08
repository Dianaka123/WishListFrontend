import {FullNameInput} from "../../components/RegistrationForm/FullNameInput"
import { EmailInput } from "../../components/RegistrationForm/EmailInput"
import { BirthdayDateInput } from "../../components/RegistrationForm/BirthdayDateInput"
import { ChooseGender } from "../../components/RegistrationForm/ChooseGender"
import { PasswordsInput } from "../../components/RegistrationForm/PasswordsInput"
import "../../styles/RegistrationFormStyles.css"
import { RegisterButton } from "../../components/RegistrationForm/RegisterButton"
import { useReducer } from "react"
import { RegistrationContext, RegistrationDispatchContext } from "../../contexts/RegistrationContext"
import registerReducer from "../../reducers/registerReducer"

export function RegistrationForm()
{
  const initData = {
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    gender: "",
    password: ""
  }

  const [data, dispatch] = useReducer(registerReducer, initData);

  return(
    <RegistrationContext.Provider value={data}>
      <RegistrationDispatchContext.Provider value={dispatch}>
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
      </RegistrationDispatchContext.Provider>
    </RegistrationContext.Provider>
  )
}