import RoutesProvider from "./RoutesProvider/RoutesProvider";
import useAuth from "./Hooks/useAuth";
import authContext from "./Context/AuthContext";

function App() {
  const auth = useAuth();
  const route = RoutesProvider(!!auth.token);

  return (
    <>
      <authContext.Provider value={auth}>{route}</authContext.Provider>
    </>
  );
}

export default App;
