import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="/images/pokemon-logo.png" alt="" />
      </Link>
    </div>
  );
};
