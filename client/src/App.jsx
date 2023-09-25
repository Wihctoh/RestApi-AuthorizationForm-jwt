import RoutesProvider from "./RoutesProvider/RoutesProvider";
import useAuth from "./hooks/useAuth";

function App() {
  const { token } = useAuth();
  const route = RoutesProvider(!!token);

  return <>{route}</>;
}

export default App;
