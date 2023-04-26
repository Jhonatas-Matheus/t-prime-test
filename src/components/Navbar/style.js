import styled from "styled-components";

export const StyledNav = styled.nav`
  position: relative;
  display: flex;
  width: 100%;
  height: 5rem;
  .logo{
    display: flex;
    span{
      color: #7a97ff;
      margin-right: .5rem;
    }
  }
  .container {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn-open-menu {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  .menu-mobile {
    position: absolute;
    /* top: 100%; */
    z-index: 9;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 5rem;
    background-color: #fff;
    button{
        cursor: pointer;
        border: none;
        border-radius: 4px;
        color: #fff;
        background-color: #7A97FF;
        padding: 1rem;
    }
    transition: .5s ease-in-out;
  }
  .show-menu{
    transform: translateY(100%);
  }
  .hidden-menu{
    transform: translateY(0%);
  }

  @media (min-width: 768px) {
    display: none;
    .menu-mobile {
      display: none;
    }
  }
`;
