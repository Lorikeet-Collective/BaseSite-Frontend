import type { PropsWithChildren } from "react";
import { useState, useRef } from "react";
import { upCarot, downCarot } from "../SVG/icons";
import SVGIcon from "../SVG/SVGIcon";
import styles from "./Dropdown.module.css";

interface DropdownProps extends PropsWithChildren {
  title: string;
  body?: string[];
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  body = [],
  children,
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.titleContainer}
        onClick={() => {
          if (!isRendered) setIsRendered(true);
          setIsOpen(!isOpen);
        }}
      >
        <h3 className={styles.title}>{title}</h3>
        <SVGIcon
          key={String(Math.random())}
          icon={isOpen ? upCarot : downCarot}
          width={50}
          color={"var(--tertiary-color)"}
        />
      </div>
      {isRendered && (
        <div
          key={String(Math.random())}
          ref={dropdown}
          className={styles.bodyContainer}
          style={{
            animationDirection: isOpen ? "normal" : "reverse",
          }}
          onAnimationEnd={() => {
            if (dropdown.current!.style.animationDirection === "reverse")
              setIsOpen(false);
          }}
        >
          {body.map((text, i) => (
            <p className={styles.bodyText} key={i + Math.random()}>
              {text}
            </p>
          ))}
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
