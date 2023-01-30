import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string().required("'Nome' é um quesito obrigatório"),
  email: yup.string().email().required("'Email' é um quesito obrigatório"),
  password: yup.string().required("'Senha' é um quesito obrigatório"),
  phoneNumber: yup
    .number()
    .min(11)
    .required("'Telefone' é um quesito obrigatório"),
});

export default schema;
