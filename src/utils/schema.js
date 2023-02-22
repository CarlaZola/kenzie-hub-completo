import * as yup from "yup"

const schemaRegister = yup.object({
    name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "Precisa de no mínimo 3 letras")
    .max(50, "No máximo 50 caracteres para o nome"),
    email: yup
    .string()
    .email("Formato de email inválido")
    .required("Email inválido"),
    password: yup
    .string() 
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
    .matches(/.{6,}/, "Deve conter no mínimo 6 caracteres"),
    confirmPassword: yup
    .string()   
    .oneOf(
      [yup.ref("password")],
      "As senhas não correspondem"
    ).required('Confirmação de senha é obrigatória'),
    bio: yup
    .string()
    .required("Escreva algo sobre você!")
    .max(200, "A bio pode conter no máximo 200 caracteres"),
    contact: yup
    .string()
    .required("Informe um celular para contato"),
    course_module: yup 
    .string()
    .required("Selecione seu módulo")
}).required()

const schemaLogin = yup.object({
  email: yup
  .string()
  .email("Formato de email inválido")
  .required("Email inválido"),
  password: yup
  .string()
  .required("Senha inválida")
}).required()

const schemaCreateTech = yup.object({
  title: yup
  .string()
  .required("Insira a Tecnologia"),
  status: yup
  .string()
  .required("Selecione o nível")
}).required()

export {schemaRegister, schemaLogin, schemaCreateTech}