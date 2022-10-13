import styled from "styled-components";

export const StatuesContainer = styled.div`
  border-radius: 10px;
  background-color: #f7f7f7;
  font-weight: bold;
  padding: 40px;
  z-index: 2;

  .content-statues {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
  }

  .shoe-button-group-statues {
    display: flex;
    flex-flow: row nowrap;
  }

  .shoe-button-statues {
    width: 100px;
    height: 30px;
    background-color: #80d1ff;
    border-radius: 5px;
    border: 1px solid black;
    &:hover {
      background-color: #34b5ff;
      cursor: pointer;
    }
  }

  .shoe-icon-statues {
    transform: rotate(-90deg);
  }
`;
