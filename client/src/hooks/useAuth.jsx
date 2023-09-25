import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function useAuth() {
  const [token, setToken] = useState();

  useEffect(() => {
    logIn();
  }, [token]);

  function logIn() {
    const token = Cookies.get("access_token");
    setToken(token);
  }

  function logOut() {
    Cookies.remove("access_token");
    setToken(null);
  }

  return { logIn, logOut, token };
}

export default useAuth;
