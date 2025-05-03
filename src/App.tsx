import { BrowserRouter, Route, Routes } from "react-router-dom";
import FaceIDPage from "./pages/SignIn";
import SignPinPage from "./pages/SignIn/signPin";
import SignInMailPage from "./pages/SignIn/signInMail";
import SignUpPage from "./pages/SignUp/signUp";
import VerifyCodePage from "./pages/SignUp/verifyCodePage";
// import HomeVerifyPage from "./pages/Home/homeVerify";
import HomeOverviewPage from "./pages/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FaceIDPage />}></Route>
        <Route path="sign-pin" element={<SignPinPage />}></Route>
        <Route path="/sign-mail" element={<SignInMailPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/verify-code" element={<VerifyCodePage />}></Route>
        <Route path="/home" element={<HomeOverviewPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
