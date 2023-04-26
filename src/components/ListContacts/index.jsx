import { StyledListContacts } from "./style";

export const ListContacts = ({ children, animationProps }) => {
  const { initial, animate, exit } = animationProps;

  return (
    <StyledListContacts
      initial={{ opacity: initial }}
      animate={{ opacity: animate }}
      exit={{ opacity: exit }}
    >
      {children}
    </StyledListContacts>
  );
};
