import { BrowserRouter, Route, Routes } from "react-router-dom";
import  {RegistrationForm } from "./pages/RegistrationForm";
import { LoginForm } from "./pages/LoginForm";
import { CheckEmail } from "./pages/CheckEmail";
import { SuccessRegistration } from "./pages/SuccessRegistration";
import { WishList } from "./pages/WishList";

const App = () =>(
  <BrowserRouter>
    <Routes>
      <Route path="/registration" element={<RegistrationForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/confirm-email" element={<SuccessRegistration/>}/>
      <Route path="/check-email" element={<CheckEmail/>}/>
      <Route path="/wish-list" element={<WishList/>}/>
    </Routes>
  </BrowserRouter>
)

export default App