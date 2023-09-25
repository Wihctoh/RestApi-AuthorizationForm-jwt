import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import SignInPage from "../Pages/SignInPage/SignInPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";

export default function RoutesProvider(isAuth) {
  if (isAuth) {
    return (
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/sign_in" element={<SignInPage />}></Route>
      <Route path="/sign_up" element={<SignUpPage />}></Route>
    </Routes>
  );
}
