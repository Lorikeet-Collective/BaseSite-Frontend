import { useState, useRef } from "react";
import { Link } from "react-router";
import { enterIcon, exitIcon } from "../SVG/icons";
import SVGIcon from "../SVG/SVGIcon";
import styles from "./MenuModal.module.css";

const MenuModal: React.FC = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const modal = useRef<HTMLUListElement>(null);

  return (
    <nav>
      <SVGIcon
        key={String(Math.random())}
        icon={isOpen ? exitIcon : enterIcon}
        interaction={() => {
          if (!isRendered) setIsRendered(true);
          setIsOpen(!isOpen);
        }}
      />
      {isRendered && (
        <ul
          // TEMP: This keygen needs to be moved to a proper function
          key={String(Math.random())}
          ref={modal}
          className={styles.modalContainer}
          style={{
            animationDirection: isOpen ? "normal" : "reverse",
          }}
          onAnimationEnd={() => {
            if (modal.current!.style.animationDirection === "reverse")
              setIsOpen(false);
          }}
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
      )}
    </nav>
  );
};

export default MenuModal;
