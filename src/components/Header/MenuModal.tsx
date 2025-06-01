import { useState, useRef } from "react";
import { enterIcon, exitIcon } from "../SVG/icons";
import SVGIcon from "../SVG/SVGIcon";
import MenuCatagory from "./MenuCatagory";
import MenuLink from "./MenuLink";
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
          <MenuCatagory title="About Us">
            <MenuLink to="/philosophy" title="Our Philosophy" />
            <MenuLink to="/flock" title="Meet the Flock" />
            <MenuLink to="/insurance" title="Insurance FAQs" />
            <MenuLink to="/resources" title="Non-Carceral Resources" />
          </MenuCatagory>
          <MenuLink to="/services" title="Services" />
          <MenuLink to="/contact" title="Contact" />
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
