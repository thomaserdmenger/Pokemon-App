import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="../../../public/images/pokemon-logo.png" alt="" />
      </Link>
    </div>
  );
};
