import styled from "styled-components";

export const LoginContainer = styled.div`
  border-radius: 10px;
  background-color: #f7f7f7;
  padding: 50px 50px;

  .elements-login {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
  }

  .input-join {
    padding: 5px;
  }

  .button-join {
    border-radius: 10px;
    border-style: none;
    padding: 5px;
    background-color: #86c2fa;
    &:hover {
      background-color: #7991fc;
      cursor: pointer;
    }
  }
`;
