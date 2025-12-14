import type { PropsWithChildren } from "react";
import { useRef, useEffect, useState } from "react";
import { upCarot, downCarot } from "../SVG/icons";
import SVGIcon from "../SVG/SVGIcon";
import styles from "./Dropdown.module.css";

interface DropdownProps extends PropsWithChildren {
    title: string;
}

const Dropdown: React.FC<DropdownProps> = ({
    title,
    children,
}): React.ReactElement => {
    const dropdown = useRef<HTMLDivElement>(null);
    const animationEffect = useRef<{
        open: Animation | null;
        close: Animation | null;
    }>({ open: null, close: null });
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [calcHeight, setCalcHeight] = useState<number>(0);

    useEffect(() => {
        setCalcHeight(dropdown.current?.clientHeight as number);
    }, []);

    useEffect(() => {
        if (
            !animationEffect.current.open &&
            !animationEffect.current.close &&
            calcHeight !== 0
        ) {
            const keyFrames: Keyframe[] = [
                { height: "0", opacity: "0" },
                { height: `${calcHeight + 20}px`, opacity: "1" },
            ];
            const keyOptions: KeyframeEffectOptions = {
                duration: 500,
                fill: "forwards",
                easing: "cubic-bezier(0.5, 1.25, 0.5, 1.25)",
            };
            animationEffect.current.open = new Animation(
                new KeyframeEffect(dropdown.current, keyFrames, keyOptions),
                document.timeline
            );
            animationEffect.current.close = new Animation(
                new KeyframeEffect(
                    dropdown.current,
                    keyFrames.reverse(),
                    keyOptions
                ),
                document.timeline
            );
            dropdown.current!.style.height = "0px";
        }
    }, [calcHeight, animationEffect]);

    useEffect(() => {
        if (isOpen) animationEffect.current.open?.play();
        else animationEffect.current.close?.play();
        return () => {
            animationEffect!.current.open?.cancel();
            animationEffect!.current.close?.cancel();
        };
    }, [isOpen, animationEffect]);

    return (
        <div className={styles.dropdownContainer}>
            <div
                className={styles.titleContainer}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <h3
                    className={styles.title}
                    style={{
                        color: isOpen
                            ? "var(--secondary-color)"
                            : "var(--tertiary-color)",
                    }}
                >
                    {title}
                </h3>
                <SVGIcon
                    key={String(Math.random())}
                    icon={isOpen ? upCarot : downCarot}
                    width={50}
                    color={"var(--tertiary-color)"}
                />
            </div>
            <div ref={dropdown} className={styles.bodyContainer}>
                {children}
            </div>
        </div>
    );
};

export default Dropdown;
