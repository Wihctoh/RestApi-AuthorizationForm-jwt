import style from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
  );
};

export default Header;
