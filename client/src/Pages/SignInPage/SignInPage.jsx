import Header from "../../Components/Header";
import style from "./SignInPage.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignInPage = () => {
  const [inpValue, setInpValue] = useState({ email: "", password: "" });

  function getInpValue(e) {
    setInpValue({ ...inpValue, [e.target.id]: e.target.value });
  }

  async function sendForm() {
    try {
      const res = await axios.post("http://localhost:5000/user/sign_in", inpValue);

      console.log(res.data);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <Header />
      <div className={style.signUpWrapper}>
        <h1>Sign In</h1>
        <p>Log in to access your account or create one. Verify your email for seamless access.</p>

        <div className={style.SignInForm}>
          <input id="email" type="text" placeholder="Your email" onChange={getInpValue} />
          <input id="password" type="password" placeholder="Password" onChange={getInpValue} />
        </div>

        <div className={style.submitBtn} onClick={sendForm}>
          Continue
        </div>
        <p>
          Not registered yet?
          <Link to={"/sign_up"}>Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default SignInPage;
