import styles from "./SVGIcon.module.css";

interface SVGIconProps {
  icon: React.ReactElement<React.SVGProps<SVGElement>>;
  interaction: () => void | null;
  zIndex?: number;
  position?: {
    top: number | undefined;
    left: number | undefined;
    right: number | undefined;
    bottom: number | undefined;
  };
}

console.log(styles);

const SVGIcon: React.FC<SVGIconProps> = ({
  icon,
  interaction,
  zIndex,
  position,
}): React.ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 24 24"
      className={styles.svgContainer}
      onClick={interaction}
      style={{
        zIndex: zIndex || 999,
        top: position?.top || 0,
        left: position?.left || undefined,
        right: position?.right || 0,
        bottom: position?.bottom || undefined,
      }}
    >
      {icon}
    </svg>
  );
};

export default SVGIcon;
