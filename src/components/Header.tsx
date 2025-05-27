import { Link } from "react-router";
// import "./Header.css";
import header from "./Header.module.css";

const Header: React.FC = (): React.ReactElement => {
  return (
    <header className={header.test}>
      <div>
        <h1>
          <Link to="/home">Lorikeet Collective</Link>
        </h1>
        <img src="" alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
            <Link to="/philosophy">Our Philosophy</Link>
            <Link to="/flock">Meet the Flock</Link>
            <Link to="/insurance">Insurance FAQs</Link>
            <Link to="/resources">Non-Carceral Resources</Link>
          </li>
          <li>
            <Link to="">Services</Link>
          </li>
          <li>
            <Link to="">AContact</Link>
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
