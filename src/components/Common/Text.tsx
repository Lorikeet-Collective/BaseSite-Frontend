import type { PropsWithChildren } from "react";
import styles from "./Text.module.css";

interface TextProps extends PropsWithChildren {
  className?: string;
}

const Text: React.FC<TextProps> = ({
  className,
  children,
}): React.ReactElement => (
  <div className={`${styles.text} ${className}`}>{children}</div>
);

export default Text;
