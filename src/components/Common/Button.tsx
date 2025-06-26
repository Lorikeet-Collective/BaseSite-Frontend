import type { PropsWithChildren } from "react";
import { Link } from "react-router";
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  link?: string;
  external?: boolean;
  isSmall?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  link,
  external = true,
  isSmall = false,
  children,
}): React.ReactElement => {
  if (link) {
    return (
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
  } else {
    return (
      <button
        className={styles.button}
        style={isSmall ? { width: "auto" } : {}}
      >
        {children}
      </button>
    );
  }
};

export default Button;
