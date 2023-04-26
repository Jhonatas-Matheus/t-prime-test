import styled from "styled-components";
import {motion} from 'framer-motion'
export const StyledListContacts = styled(motion.ul)`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
  @media (min-width: 768px){
    width: 50%;
    height: 70%;
  }
  &::-webkit-scrollbar {
    width: 5px; /* width of the entire scrollbar */
    right: 20px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 1rem 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7a97ff;
    border-radius: 10px;
  }
`;
