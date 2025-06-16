import styles from "./SVGIcon.module.css";

interface SVGIconProps {
  icon: React.ReactElement<React.SVGProps<SVGElement>>;
  interaction?: () => void;
  position?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  height?: number;
  width?: number;
  color?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({
  icon,
  interaction = undefined,
  position = { top: 0, left: undefined, right: 0, bottom: undefined },
  width = 50,
  height = width,
  color = "",
}): React.ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={styles.svgContainer}
    onClick={interaction}
    style={{
      top: position.top,
      left: position.left,
      right: position.right,
      bottom: position.bottom,
      color,
    }}
  >
    {icon}
  </svg>
);

export default SVGIcon;
