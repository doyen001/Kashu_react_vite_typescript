import { BrowserRouter, Route, Routes } from "react-router-dom";
import FaceIDPage from "./pages/SignIn";
import SignPinPage from "./pages/SignIn/signPin";
import SignInMailPage from "./pages/SignIn/signInMail";
import SignUpPage from "./pages/SignUp/signUp";
import VerifyCodePage from "./pages/SignUp/verifyCodePage";
import HomeOverviewPage from "./pages/Home";
import SignUpTelPage from "./pages/SignUp/tel";
import TelCode from "./pages/SignUp/telCode";
import MainProvider from "./context/mainContext";
import InfoPersonal from "./pages/SignUp/infoPersonal";
import InfoAddress from "./pages/SignUp/infoAddress";
import SignUpCheck from "./pages/SignUp/check";
import FaceId from "./pages/SignUp/faceId";
import PinPage from "./pages/SignUp/pin";
import SignUpQuestionPage from "./pages/SignUp/question";
import VerifyStart from "./pages/Home/verify";
import PassportCheck from "./pages/Home/verify/passportCheck";

export default function App() {
  return (
    <MainProvider>
      <BrowserRouter basename="/Kashu_react_vite_typescript">
        <Routes>
          <Route path="/" element={<FaceIDPage />}></Route>
          <Route path="/home" element={<HomeOverviewPage />}></Route>
          <Route path="sign-pin" element={<SignPinPage />}></Route>
          <Route path="/sign-mail" element={<SignInMailPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/verify-code" element={<VerifyCodePage />}></Route>
          <Route path="/sign_up_tel" element={<SignUpTelPage />}></Route>
          <Route path="/sign_up_tel_code" element={<TelCode />}></Route>
          <Route path="/sign_up_personal" element={<InfoPersonal />}></Route>
          <Route path="/sign_up_address" element={<InfoAddress />}></Route>
          <Route path="/sign_up_check" element={<SignUpCheck />}></Route>
          <Route path="/sign_up_face_id" element={<FaceId />}></Route>
          <Route path="/sign_up_pin" element={<PinPage />}></Route>
          <Route
            path="/sign_up_question"
            element={<SignUpQuestionPage />}
          ></Route>
          <Route path="/verify_start" element={<VerifyStart />}></Route>
          <Route path="/verify_passport" element={<PassportCheck />}></Route>
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}
