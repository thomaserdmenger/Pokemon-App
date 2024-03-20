import "./Header.css";
import { Link } from "react-router-dom";
import { darkModeContext } from "../../context/Context";
import { useContext } from "react";

export const Header = () => {
  const { darkMode } = useContext(darkModeContext);

  return (
    <div className={darkMode ? "header dark" : "header"}>
      <Link to="/">
        <img src="/images/pokemon-logo.png" alt="" />
      </Link>
    </div>
  );
};
