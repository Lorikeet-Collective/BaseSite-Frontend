import { useState } from "react";
import { Link } from "react-router";
import SVGIcon from "../SVG/SVGIcon";
import { accordianIcon, exitIcon } from "../SVG/icons";
import styles from "./Header.module.css";

const Header: React.FC = (): React.ReactElement => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const menuHandler = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.headerContainer}>
      <div>
        <h1 className={styles.headerName}>
          <Link to="/home">Lorikeet Collective</Link>
        </h1>
        <img src="null" alt="logo" />
      </div>
      <nav>
        <SVGIcon
          key={String(Math.random())}
          icon={isNavOpen ? exitIcon : accordianIcon}
          interaction={menuHandler}
        />
        {isNavOpen && (
          <ul>
            <li>
              <Link to="/about">About Us</Link>
              <Link to="/philosophy">Our Philosophy</Link>
              <Link to="/flock">Meet the Flock</Link>
              <Link to="/insurance">Insurance FAQs</Link>
              <Link to="/resources">Non-Carceral Resources</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <button>
                <a
                  href="https://lorikeetcollective.sessionshealth.com/"
                  target="_blank"
                >
                  BOOK NOW
                </a>
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
