// import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Form from "./pages/form/Form";
import { Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null || true;

  if (!isLoggedIn) {
    return <Navigate to={"/users/sign_in"} />;
  } else if (
    isLoggedIn &&
    ["/users/sign_in", "/users/sign_up"].includes(window.location.pathname)
  ) {
    return <Navigate to={"/"} />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute auth={true}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/sign_in"
        element={
          <ProtectedRoute>
            <Form isSignInPage={true} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/sign_up"
        element={
          <ProtectedRoute>
            <Form isSignInPage={false} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
