import type { PropsWithChildren } from "react";
import styles from "./BasicContainer.module.css";

interface BasicContainerProps extends PropsWithChildren {
  className?: string;
}

const BasicContainer: React.FC<BasicContainerProps> = ({
  className,
  children,
}): React.ReactElement => (
  <div className={`${styles.container} ${className}`}>{children}</div>
);

export default BasicContainer;
