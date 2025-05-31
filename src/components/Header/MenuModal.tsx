import { useState } from "react";
import { Link } from "react-router";
import { exitIcon } from "../SVG/icons";
import SVGIcon from "../SVG/SVGIcon";
import styles from "./MenuModal.module.css";

interface MenuModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuModal: React.FC<MenuModalProps> = ({
  setIsModalOpen,
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <SVGIcon icon={exitIcon} interaction={() => setIsOpen(false)} />
      <ul
        // TEMP: This keygen needs to be moved to a proper function
        key={String(Math.random())}
        className={styles.modalContainer}
        style={{ animationDirection: isOpen ? "normal" : "reverse" }}
        onAnimationEnd={() => {
          if (!isOpen) setIsModalOpen(false);
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
    </>
  );
};

export default MenuModal;
