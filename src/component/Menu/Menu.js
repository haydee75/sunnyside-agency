import "./Menu.scss";
import logo from "../../images/logo.svg";
import { useState } from "react";

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="Menu">
      <h1>
        <img src={logo} alt="logo-sunnyside" />
      </h1>
      <div className="logo-menu" onClick={() => setToggleMenu(!toggleMenu)}>
        <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
            fill="#FFF"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className={`navigation ${toggleMenu ? "active" : "hidden"}`}>
        <ul className="links">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>
            <a className="primary" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
