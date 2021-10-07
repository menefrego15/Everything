// routes
import Router from "./routes";
// theme
// hooks
import useAuth from "./hooks/useAuth";
import LoadingScreen from "./components/LoadingScreen";
// components

// ----------------------------------------------------------------------

export default function App() {
  const { isInitialized } = useAuth();

  return isInitialized ? <Router /> : <LoadingScreen />;
}
