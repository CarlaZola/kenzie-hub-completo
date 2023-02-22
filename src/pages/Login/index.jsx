import { ToastContainer } from "react-toastify";
import FormLogin from "../../components/Forms/FormLogin";
import "react-toastify/dist/ReactToastify.css";
import LinkStyle from "../../styles/link";

const Login = () => {
  return (
    <>
      <ToastContainer />
      <h1>Kenzie Hub</h1>

      <div className="contentLogin">
        <h2>Login</h2>
      </div>
      <FormLogin />
      <span>Ainda não possui uma conta?</span>
      <LinkStyle to="/register">Cadastre-se</LinkStyle>
    </>
  );
};

export default Login;
