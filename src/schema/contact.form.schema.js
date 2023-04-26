import * as yup from "yup";


export const schema = yup.object({
    nome: yup.string().required("O campo é obrigatório"),
    email: yup.string().required("O campo é obrigatório").email("O email deve ser um email válido"),
    telefone: yup.string().required("O campo é obrigatório"),
    codigo: yup.string("O campo deve ser um número").required("O campo é obrigatório")
})