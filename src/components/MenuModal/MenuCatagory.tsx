import type { PropsWithChildren } from "react";
import { useState, useRef } from "react";
import { upCarot, downCarot } from "../SVG/icons";
import SVGIcon from "../SVG/SVGIcon";
import SinWave from "../Common/SinWave";
import styles from "./MenuCatagory.module.css";

interface MenuCatagoryProps extends PropsWithChildren {
    title?: string;
}

const MenuCatagory: React.FC<MenuCatagoryProps> = ({
    children,
    title,
}): React.ReactElement => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRendered, setIsRendered] = useState(false);
    const menu = useRef<HTMLUListElement>(null);

    return (
        <li className={styles.listContainer}>
            <div
                className={styles.titleContainer}
                onClick={() => {
                    if (!isRendered) setIsRendered(true);
                    setIsOpen(!isOpen);
                }}
            >
                <SVGIcon
                    key={String(Math.random())}
                    icon={isOpen ? upCarot : downCarot}
                    width={25}
                />
                {title}
                <SVGIcon
                    key={String(Math.random())}
                    icon={isOpen ? upCarot : downCarot}
                    width={25}
                />
            </div>
            {isRendered && (
                <ul
                    // TEMP: This keygen needs to be moved to a proper function
                    key={String(Math.random())}
                    ref={menu}
                    className={styles.catagoryContainer}
                    style={{
                        animationDirection: isOpen ? "normal" : "reverse",
                    }}
                    onAnimationEnd={() => {
                        if (
                            menu.current!.style.animationDirection === "reverse"
                        )
                            setIsOpen(false);
                    }}
                >
                    {children}
                    <SinWave useDynamicHeight amplitude={3} />
                </ul>
            )}
        </li>
    );
};

export default MenuCatagory;
