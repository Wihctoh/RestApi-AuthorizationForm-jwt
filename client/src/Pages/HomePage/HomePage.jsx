import Header from "../../Components/Header";
import style from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div>
      <Header />

      <div className={style.homeWrapper}>
        <div className={style.titleImg}></div>

        <h1>Woohoo!</h1>
        <p>
          You have successfully logged into the system, and a token has been assigned to you. To log
          out, please click on Sign Out.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
