import {FullNameInput} from "../../components/RegistrationForm/FullNameInput"
import { EmailInput } from "../../components/RegistrationForm/EmailInput"
import "../../styles/RegistrationFormStyles.css"

export function RegistrationForm()
{
  return(
    <div className="modal">
      <form className="modal-content">
        <div className="container">
          <h1>Registration</h1>
          <FullNameInput/>
          <EmailInput/>
          <EmailInput/>

          <button>Registrate</button>
        </div>
      </form>
    </div>
  )
}