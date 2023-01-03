import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TaskPage from "./pages/TaskPage";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);

  const login = (username, password) => {
    const user = JSON.parse(localStorage.getItem(username));
    console.log(user);
    setIsUserLogged(user?.password === password);
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage login={login} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/tasks"
        element={isUserLogged ? <TaskPage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
