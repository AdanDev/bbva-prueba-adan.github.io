import React, { useState } from "react";
import { LoginContainer } from "../styles/components/Login.styled";

const NAME_DEF = "";

export const Login = ({ handleLoginSubmit }) => {
  const [nameValue, setNameValue] = useState(NAME_DEF);

  const onInputChange = (e) => {
    const { value } = e.target;
    setNameValue(value);
  };

  const onSubmit = () => {
    if (nameValue) {
      handleLoginSubmit(nameValue);
    }
  };

  return (
    <LoginContainer>
      <div className="elements-login">
        <div>Create new player</div>
        <input
          id="name"
          className="input-join"
          value={nameValue || ""}
          onChange={onInputChange}
          placeholder="Name"
        />
        <button className="button-join" onClick={onSubmit}>
          Join
        </button>
      </div>
    </LoginContainer>
  );
};
