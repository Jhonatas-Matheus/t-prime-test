import { StyledForm } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../schema/contact.form.schema";
import ReactInputMask from "react-input-mask";
import { toast } from "react-toastify";

export const Form = ({ setContacts, animationProps }) => {
  const {initial,animate,exit} = animationProps
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleCreateContact = (data) => {
    setContacts((previousState) => [...previousState, data]);
    //A linha a cima é como se fosse o push do novo contato para adcionar ao array como solicitado no ponto 4 do teste, pois como utilizei react não fazia sentido nao utilizar os recusos da lib para fazer essa ação
    reset({
      nome: "",
      email: "",
      codigo: "",
      telefone: "",
    });
    reset();
    toast.success('Contato adicionado com sucesso.', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };
  return (
    <StyledForm
      onSubmit={handleSubmit(handleCreateContact)}
      initial={{ opacity: initial }}
      animate={{ opacity: animate }}
      exit={{ opacity: exit }}
    >
      <h2>Adcionar Contato</h2>
      <input type="text" placeholder="Nome" {...register("nome")} />
      {errors.nome && (
        <span className="form-errors">{errors.nome.message}</span>
      )}
      <input type="text" placeholder="Email" {...register("email")} />
      {errors.email && (
        <span className="form-errors">{errors.email.message}</span>
      )}
      <ReactInputMask
        {...register("telefone")}
        mask="(99) 99999-9999"
        placeholder="Telefone"
      />
      {errors.telefone && (
        <span className="form-errors">{errors.telefone.message}</span>
      )}
      <input type="number" placeholder="Código" {...register("codigo")} />
      {errors.codigo && (
        <span className="form-errors">{errors.codigo.message}</span>
      )}
      <input type="submit" value="Adicionar" />
    </StyledForm>
  );
};
