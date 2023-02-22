import { ToastContainer } from "react-toastify";
import FormLogin from "../../components/Forms/FormLogin";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  return (
    <>
      <ToastContainer />
      <FormLogin />
    </>
  );
};

export default Login;
