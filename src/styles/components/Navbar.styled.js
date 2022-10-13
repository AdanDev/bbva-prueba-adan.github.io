import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #203b9e;
  padding: 10px 50px;
  color: white;

  .content-navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .greeting-navbar {
    font-weight: bold;
  }

  .button-exit-navbar {
    color: white;
    border: none;
    background-color: transparent;
    &:hover {
      cursor: pointer;
    }
  }
`;
