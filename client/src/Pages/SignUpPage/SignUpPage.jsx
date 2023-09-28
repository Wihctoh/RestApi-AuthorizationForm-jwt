import Header from "../../Components/Header/Header";
import style from "./SignUpPage.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [inpValue, setInpValue] = useState({ name: "", surname: "", email: "", password: "" });

  function getInpValue(e) {
    setInpValue({ ...inpValue, [e.target.id]: e.target.value });
  }

  async function sendForm() {
    try {
      const res = await axios.post("http://localhost:5000/user/sign_up", inpValue);

      console.log(res.data);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <Header />
      <div className={style.signInWrapper}>
        <h1>Welcome, lets create an account</h1>
        <p>
          Create an account to keep track of your customers, and contributors. Once your account has
          been created then don’t forget to verify your account through mail.
        </p>

        <div className={style.SignInForm}>
          <div className={style.SignInFormNameSurname}>
            <input id="name" type="text" placeholder="Your name" onChange={getInpValue} />
            <input id="surname" type="text" placeholder="Your surname" onChange={getInpValue} />
          </div>
          <input id="email" type="text" placeholder="Your email" onChange={getInpValue} />
          <input id="password" type="password" placeholder="Password" onChange={getInpValue} />
        </div>

        <div className={style.submitBtn} onClick={sendForm}>
          Continue
        </div>
        <p>
          Already registered?
          <Link to={"/sign_in"}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
