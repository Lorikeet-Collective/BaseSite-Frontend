import type { PropsWithChildren } from "react";
import { Link } from "react-router";
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  link: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  link,
  external = true,
  children,
}): React.ReactElement => (
  <button className={styles.button}>
    {external ? (
      <a className={styles.buttonLink} href={link} target={"_blank"}>
        {children}
      </a>
    ) : (
      <Link className={styles.buttonLink} to={link}>
        {children}
      </Link>
    )}
  </button>
);

export default Button;
