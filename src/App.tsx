import { BrowserRouter, Route, Routes } from "react-router-dom";
import FaceIDPage from "./pages/SignIn";
import SignPinPage from "./pages/SignIn/signPin";
import SignInMail from "./pages/SignIn/signInMail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FaceIDPage />}></Route>
        <Route path="/sign-pin" element={<SignPinPage />}></Route>
        <Route path="/sign-mail" element={<SignInMail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
