import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../providers/UserContext";
import Button from "../../../styles/button";
import { schemaLogin } from "../../../utils/schema";
import Input from "../Input";
import InputPassword from "../InputPassword";
import StyledLoginForm from "./formLogin";

const FormLogin = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaLogin),
  });

  const submitLogin = (dataLogin) => {
    userLogin(dataLogin);
    reset();
  };
  return (
    <StyledLoginForm onSubmit={handleSubmit(submitLogin)}>
      <Input
        label="Email"
        id="email"
        name="email"
        placeholder="Digite seu email"
        {...register("email")}
        error={errors.email?.message}
      />

      <InputPassword
        label="Senha"
        id="password"
        type="password"
        name="password"
        placeholder="Digite sua senha"
        {...register("password")}
        error={errors.password?.message}
        button={true}
      />

      <Button type="submit">Entrar</Button>
    </StyledLoginForm>
  );
};

export default FormLogin;
