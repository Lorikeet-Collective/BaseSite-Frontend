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
        <ul
          key={String(Math.random())}
          className={styles.navContainer}
          style={
            {
              animationDirection: isNavOpen ? "normal" : "reverse",
            }
          }
        >
          <li>
            About Us
            <ul>
              <li>
                <Link to="/philosophy">Our Philosophy</Link>
              </li>
              <li>
                <Link to="/flock">Meet the Flock</Link>
              </li>
              <li>
                <Link to="/insurance">Insurance FAQs</Link>
              </li>
              <li>
                <Link to="/resources">Non-Carceral Resources</Link>
              </li>
            </ul>
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
      </nav>
    </header>
  );
};

export default Header;
