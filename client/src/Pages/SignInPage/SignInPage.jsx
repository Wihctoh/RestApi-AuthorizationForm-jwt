import Header from "../../Components/Header";
import style from "./SignInPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const SignInPage = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();

  const [inpValue, setInpValue] = useState({ email: "", password: "" });

  function getInpValue(e) {
    setInpValue({ ...inpValue, [e.target.id]: e.target.value });
  }

  async function sendForm() {
    try {
      const res = await axios.post("http://localhost:5000/user/sign_in", inpValue, {
        withCredentials: true,
      });

      if (!res.data.length) throw new Error("Incorrect email or password!");

      logIn();
      navigate("/home");
    } catch (error) {
      alert(error.message);
      setInpValue({ email: "", password: "" });
    }
  }

  return (
    <>
      <Header />
      <div className={style.signUpWrapper}>
        <h1>Sign In</h1>
        <p>Log in to access your account or create one. Verify your email for seamless access.</p>

        <div className={style.signInForm}>
          <input
            id="email"
            type="text"
            placeholder="Your email"
            value={inpValue.email}
            onChange={getInpValue}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={inpValue.password}
            onChange={getInpValue}
          />
        </div>

        <div className={style.submitBtn} onClick={sendForm}>
          Continue
        </div>
        <div className={style.signUpLink}>
          Not registered yet?
          <Link to={"/sign_up"}>Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
