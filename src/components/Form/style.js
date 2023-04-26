import styled from "styled-components";
import {motion} from 'framer-motion'
export const StyledForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  h2 {
    text-align: center;
    width: 15rem;
  }
  input {
    margin-top: 1rem;
    width: 15rem;
    padding: 1rem;
    background: rgba(99, 98, 98, 0.31);
    border-radius: 10px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  input[type="submit"] {
    cursor: pointer;
    padding: 1rem;
    background: #7a97ff;
    color: #fff;
    transition: .5s;
    &:hover {
      transform: scale(1.05);
    }
    &:active{
      transform: scale(.95);
    }
  }
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  .form-errors{
    width: 15rem;
    text-align: start;
    color: #7a97ff;
    font-size: .7rem;
    font-weight: bold;
  }
`;
