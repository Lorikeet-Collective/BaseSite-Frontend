import { PropsWithChildren } from "react";
import styles from "./Title.module.css";

interface TitleProps extends PropsWithChildren {
  subTitle?: boolean;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  className,
  subTitle = false,
  children,
}): React.ReactElement =>
  subTitle ? (
    <h3 className={`${styles.subTitle} ${className}`}>{children}</h3>
  ) : (
    <h2 className={`${styles.title} ${className}`}>{children}</h2>
  );

export default Title;
