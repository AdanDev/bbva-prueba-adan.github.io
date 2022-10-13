import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { NavbarContainer } from "../styles/components/Navbar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clearUserGame } from "../redux/gameSlice";
import { clearUserName } from "../redux/registrySlice";

export const Navbar = () => {
  const userName = useSelector((state) => state.registry.userName);
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(clearUserName());
    dispatch(clearUserGame());
  };

  return (
    <>
      <NavbarContainer>
        <div className="content-navbar">
          <div className="greeting-navbar">Hi {userName}</div>
          <button className="button-exit-navbar" onClick={handleOnClick}>
            <FontAwesomeIcon className="fa-xl" icon={faArrowRightFromBracket} />
          </button>
        </div>
      </NavbarContainer>
    </>
  );
};
