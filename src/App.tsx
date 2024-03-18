import { BrowserRouter, Route, Routes } from "react-router-dom";
import  {RegistrationForm } from "./pages/RegistrationForm";
import { LoginForm } from "./pages/LoginForm";

const App = () =>(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegistrationForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
    </Routes>
  </BrowserRouter>
)

export default App