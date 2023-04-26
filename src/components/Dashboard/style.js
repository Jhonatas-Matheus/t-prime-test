import styled from "styled-components";

export const StyledDashboard = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
  .logo{
    display: none;
    position: absolute;
    top: 2rem;
    left: 2rem;
    span{
      color: #7a97ff;
      margin-right: .5rem;
    }
    @media (min-width: 768px){
      display: flex;
    }
  }
  .left-side {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    @media(max-width:768px){
      padding: 0 .5rem;
      width: 100%;
    }
  }
  .right-side {
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  @media (max-width: 768px) {
    .right-side {
      display: none;
    }
    .left-side {
      flex-basis: 100%;
    }
  }
  .btn-change-view {
    position: absolute;
    bottom: 2rem;
    right: 4rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    color: #fff;
    border: none;
    border-radius: 4px;
    background: rgba(99, 98, 98, 0.31);
    transition: .5s;
    &:hover{
      background: #7a97ff;
    }
  }
`;
