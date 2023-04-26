import { StyledCardContact } from "./style";

export const CardContact = ({ card }) => {
  const { nome, email, telefone, codigo } = card;
  return (
    <StyledCardContact>
      <p>
        <span className="field-label">Nome:</span> <span>{nome}</span>
      </p>
      <p>
        <span className="field-label">Email:</span> <span>{email}</span>
      </p>
      <p>
        <span className="field-label">Telefone: </span>
        <span>{telefone}</span>
      </p>
      <p>
        <span className="field-label">Código: </span>
        <span>{codigo}</span>
      </p>
    </StyledCardContact>
  );
};
