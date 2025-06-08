import { useState, useRef, useInsertionEffect } from "react";
import { createPortal } from "react-dom";
import { enterIcon, exitIcon } from "../SVG/icons";
import SVGIcon from "../SVG/SVGIcon";
import MenuCatagory from "./MenuCatagory";
import MenuLink from "./MenuLink";
import styles from "./MenuModal.module.css";

const MenuModal: React.FC = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const modal = useRef<HTMLUListElement>(null);

  useInsertionEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className={styles.navContainer}>
      <SVGIcon
        key={String(Math.random())}
        icon={isOpen ? exitIcon : enterIcon}
        width={40}
        interaction={() => {
          if (!isRendered) setIsRendered(true);
          setIsOpen(!isOpen);
        }}
      />
      {isRendered &&
        createPortal(
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
          </ul>,
          document.body
        )}
    </nav>
  );
};

export default MenuModal;
