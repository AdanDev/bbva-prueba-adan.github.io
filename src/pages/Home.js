import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../components/Login";
import { loadUserName } from "../redux/registrySlice";
import { HomeContainer } from "../styles/pages/Home.styled";

export const Home = () => {
  const userName = useSelector((state) => state.registry.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLoginSubmit = (nameUserLogin) => {
    dispatch(loadUserName(nameUserLogin));
  };

  useEffect(() => {
    if (userName) {
      navigate("/game");
    }
  }, [userName, navigate]);

  return (
    <>
      <HomeContainer>
        <Login handleLoginSubmit={onLoginSubmit} />
      </HomeContainer>
    </>
  );
};
