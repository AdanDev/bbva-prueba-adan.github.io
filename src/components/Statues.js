import {
  faShoePrints,
  faTrafficLight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDataGame, saveDataGame } from "../redux/gameSlice";
import { StatuesContainer } from "../styles/components/Statues.styled";

export const Statues = () => {
  const userName = useSelector((state) => state.registry.userName);
  const currentUserNumber = useSelector((state) => state.game.currentUserNumber);
  const dataGameUsers = useSelector((state) => state.game.dataGameUsers);

  const [shoeScore, setShoeScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  const [lastShoe, setLastShoe] = useState("");
  const [greenLightActive, setGreenLightActive] = useState(true);

  const dispatch = useDispatch();

  const greenLightTime =
    Math.max(10000 - shoeScore * 100, 2000) + Math.random(-1500, 1500);
  const redLightTime = 3000;

  useEffect(() => {
    dispatch(loadDataGame(userName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(currentUserNumber > -1){
      const currentDataGame = JSON.parse(localStorage.getItem('dataGameUsersState'));
      setHighScore(currentDataGame[currentUserNumber].highScore);
      setShoeScore(currentDataGame[currentUserNumber].points);
    }
  }, [currentUserNumber, dataGameUsers]);

  useEffect(() => {
    if (greenLightActive) {
      setTimeout(() => {
        setGreenLightActive(false);
      }, greenLightTime);
    } else {
      setTimeout(() => {
        setGreenLightActive(true);
      }, redLightTime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [greenLightActive]);

  useEffect(() => {
    if (shoeScore > 0) {
      dispatch(
        saveDataGame({
          userName,
          shoeScore: greenLightActive ? shoeScore : 0,
        })
      );
    }

    if (!greenLightActive) {
      setShoeScore(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoeScore]);

  const onShoeClick = (shoeType) => {
    if (lastShoe !== shoeType) {
      setShoeScore(shoeScore + 1);
      setLastShoe(shoeType);
    } else if (shoeScore > 0) {
      setShoeScore(shoeScore - 1);
    }
  };

  return (
    <StatuesContainer>
      <div className="content-statues">
        <h3>High Score: {highScore}</h3>
        <div style={greenLightActive ? { color: "green" } : { color: "red" }}>
          <FontAwesomeIcon className="fa-2xl" icon={faTrafficLight} />
        </div>
        <h3>Score: {shoeScore}</h3>
        <div className="shoe-button-group-statues">
          <button
            className="shoe-button-statues"
            onClick={() => onShoeClick("left")}
          >
            <FontAwesomeIcon
              className="shoe-icon-statues"
              icon={faShoePrints}
            />{" "}
            LEFT
          </button>
          <button
            className="shoe-button-statues"
            onClick={() => onShoeClick("right")}
          >
            <FontAwesomeIcon
              className="shoe-icon-statues"
              icon={faShoePrints}
            />{" "}
            RIGHT
          </button>
        </div>
      </div>
    </StatuesContainer>
  );
};
