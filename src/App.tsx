import { BrowserRouter, Route, Routes } from "react-router-dom";
import  {RegistrationForm } from "./pages/RegistrationForm";
import { LoginForm } from "./pages/LoginForm";
import { CheckEmail } from "./pages/CheckEmail";
import { SuccessRegistration } from "./pages/SuccessRegistration";
import { WishList } from "./pages/WishList";
import { InputEmailForResetPassword } from "./pages/InputEmailForResetPassword";
import { InputNewPassword } from "./pages/InputNewPassword";

const App = () =>(
  <BrowserRouter>
    <Routes>
      <Route path="/registration" element={<RegistrationForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/confirm-email" element={<SuccessRegistration/>}/>
      <Route path="/check-email" element={<CheckEmail/>}/>
      <Route path="/wish-list" element={<WishList/>}/>
      <Route path="/email-to-reset" element={<InputEmailForResetPassword/>}/>
      <Route path="/change-password" element={<InputNewPassword/>}/>
    </Routes>
  </BrowserRouter>
)

export default App