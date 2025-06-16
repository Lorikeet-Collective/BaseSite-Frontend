import type { PropsWithChildren } from "react";
import { useRef, useEffect, useState } from "react";
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
  const dropdown = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [calcHeight, setCalcHeight] = useState<number>(0);
  const [animationEffect] = useState<{
    open: Animation | null;
    close: Animation | null;
  }>({ open: null, close: null });

  useEffect(() => {
    setCalcHeight(dropdown.current?.clientHeight as number);
  }, []);

  useEffect(() => {
    if (!animationEffect.open && !animationEffect.close && calcHeight !== 0) {
      const animationOpen = new KeyframeEffect(
        dropdown.current,
        [
          { height: "0", opacity: "0" },
          { height: `${calcHeight + 10}px`, opacity: "1" },
        ],
        {
          duration: 500,
          fill: "forwards",
        }
      );
      const animationClose = new KeyframeEffect(
        dropdown.current,
        [
          { height: `${calcHeight + 10}px`, opacity: "1" },
          { height: "0", opacity: "0" },
        ],
        {
          duration: 500,
          fill: "forwards",
        }
      );
      animationEffect.open = new Animation(animationOpen, document.timeline);
      animationEffect.close = new Animation(animationClose, document.timeline);
      dropdown.current!.style.height = "0px";
    }
  }, [calcHeight, animationEffect]);

  useEffect(() => {
    if (isOpen) animationEffect.open?.play();
    else animationEffect.close?.play();
    return () => {
      animationEffect.open?.cancel();
      animationEffect.close?.cancel();
    };
  }, [isOpen, animationEffect]);

  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.titleContainer}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className={styles.title}>{title}</h3>
        <SVGIcon
          key={String(Math.random())}
          icon={isOpen ? upCarot : downCarot}
          width={50}
          color={"var(--tertiary-color)"}
        />
      </div>
      <div ref={dropdown} className={styles.bodyContainer}>
        {body.map((text, i) => (
          <p className={styles.bodyText} key={i + Math.random()}>
            {text}
          </p>
        ))}
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
