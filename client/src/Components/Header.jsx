import useAuth from "../hooks/useAuth";
import style from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { token, logOut } = useAuth();
  const navigate = useNavigate();

  function logOutUser() {
    logOut();
    navigate("/sign_in");
  }

  return !token ? (
    <div>
      <div className={style.headerWrapper}>
        <div className={style.headerNav}>
          <div className={style.signInBtn}>
            <Link to={"/sign_in"}>Sign In</Link>
          </div>

          <div className={style.signUpBtn}>
            <Link to={"/sign_up"}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className={style.headerWrapper}>
        <div className={style.headerNav}>
          <div className={style.signInBtn}>
            <div onClick={logOutUser}>Log Out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
