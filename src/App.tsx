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
import LoadingPage from "./pages/Loading";
import WelcomePage from "./pages/Welcome";
import WelcomeMessagePage from "./pages/Welcome/message";
import HomeLayout from "./layout";
import CardViewPage from "./pages/Home/card";
import ActivityPage from "./pages/Home/activity";
import SettingPage from "./pages/Home/setting";
import NewCardPage from "./pages/Home/card/new";
import DepositPage from "./pages/Home/deposit";
import DepositAmountPage from "./pages/Home/deposit/amount";
import WithdrawPage from "./pages/Home/widthdraw";
import WithdrawAmountPage from "./pages/Home/widthdraw/amount";
import VerifiedPage from "./pages/Home/verified";
import CardViewTestPage from "./pages/Home/card/view";

import "./style/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/face_id" element={<FaceIDPage />}></Route>
          <Route
            path="/*"
            element={
              <HomeLayout>
                <Routes>
                  <Route path="/home" element={<HomeOverviewPage />}></Route>
                  <Route
                    path="/home/verified"
                    element={<VerifiedPage />}
                  ></Route>
                  <Route path="/card" element={<CardViewPage />}></Route>
                  <Route
                    path="/card/view"
                    element={<CardViewTestPage />}
                  ></Route>
                  <Route path="/activity" element={<ActivityPage />}></Route>
                  <Route path="/setting" element={<SettingPage />}></Route>
                </Routes>
              </HomeLayout>
            }
          />
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
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/welcome-message" element={<WelcomeMessagePage />} />
          <Route path="/card/new" element={<NewCardPage />} />
          <Route path="/deposit" element={<DepositPage />} />
          <Route path="/deposit/amount" element={<DepositAmountPage />} />
          <Route path="/withdraw" element={<WithdrawPage />} />
          <Route path="/withdraw/amount" element={<WithdrawAmountPage />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}
