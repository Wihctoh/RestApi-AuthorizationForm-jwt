import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/sign_in" element={<SignInPage />}></Route>
        <Route path="/sign_up" element={<SignUpPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
