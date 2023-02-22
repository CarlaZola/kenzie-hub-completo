import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Select from "../Select";
import { UserContext } from "../../../providers/UserContext";
import { schemaRegister } from "../../../utils/schema";
import InputPassword from "../InputPassword";

const FormRegister = () => {
  const { userRegister } = useContext(UserContext);
  
  const courseModule = [
    {
        value: "Primeiro módulo (Introdução ao Frontend)",
    },
    {
        value: "Segundo módulo (Frontend Avançado)",
    },
    {
        value: "Terceiro módulo (Introdução ao Backend)",
    },
    {
        value: "Quarto módulo (Backend Avançado)",
    }
]

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaRegister),
  });

  const submitNewUser = (data) => {
    userRegister(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitNewUser)}>
      <Input
        label="Nome"
        placeholder="Digite aqui seu nome"
        type="text"
        id="name"
        name="name"
        {...register("name")}
        error={errors.name?.message}
      />

      <Input
        label="Email"
        placeholder="Digite aqui seu email"
        id="email"
        name="email"
        {...register("email")}
        error={errors.email?.message}
      />

      <InputPassword
        label="Senha"
        placeholder="Digite aqui sua senha"
        id="password"
        type="password"
        name="password"
        {...register("password")}
        error={errors.password?.message}
        button={true}
      />

      <InputPassword
        label="Confirmar Senha"
        placeholder="Digite novamente sua senha"
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
        button={true}
      />

      <Input
        label="Bio"
        placeholder="Fale sobre você"
        type="text"
        id="bio"
        name="bio"
        {...register("bio")}
        error={errors.bio?.message}
      />

      <Input
        label="Contato"
        placeholder="Opção de contato"
        type="tel"
        id="contact"
        name="contact"
        {...register("contact")}
        error={errors.contact?.message}
      />

      <Select
        label="Selecionar módulo"
        placeholder="Módulo Atual"
        id="course_module"
        name="course_module"
        {...register("course_module")}
        error={errors.course_module?.message}
        array={courseModule}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FormRegister;
