import FormRegister from "../../components/Forms/FormRegister";
import { ToastContainer } from "react-toastify";
import LinkStyle from "../../styles/link";
import StyledRegister from "./register";

const Register = () => {
  return (
    <StyledRegister>
      <section>
        <ToastContainer />
        <div className="navBar">
          <h1>Kenzie Hub</h1>
          <LinkStyle className="linkRegister" to="/">
            Voltar
          </LinkStyle>
        </div>

        <div className="contentForm">
          <h2>Crie sua conta</h2>
          <span>Rápido e grátis, vamos nessa!</span>
          <FormRegister />
        </div>
      </section>
    </StyledRegister>
  );
};

export default Register;
