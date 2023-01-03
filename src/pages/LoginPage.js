import LoginForm from "../components/pure/LoginForm";
import Navbar from "../components/pure/Navbar";

function LoginPage({ login }) {
  return (
    <>
      <Navbar />
      <LoginForm login={login} />
    </>
  );
}

export default LoginPage;
