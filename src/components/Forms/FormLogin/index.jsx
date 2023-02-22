import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../providers/UserContext";
import { schemaLogin } from "../../../utils/schema";
import Input from "../Input";
import InputPassword from "../InputPassword";

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
    <form onSubmit={handleSubmit(submitLogin)}>
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

      <button type="submit">Entrar</button>
    </form>
  );
};

export default FormLogin;
