import { PropsWithChildren } from "react";
import styles from "./Text.module.css";

interface TextProps extends PropsWithChildren {
  className?: string;
}

const Text: React.FC<TextProps> = ({
  className,
  children,
}): React.ReactElement => (
  <p className={`${styles.text} ${className}`}>{children}</p>
);

export default Text;
