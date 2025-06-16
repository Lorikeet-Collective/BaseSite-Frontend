import { Link } from "react-router";
import styles from "./Button.module.css";

interface ButtonProps {
  title: string;
  link: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  link,
  external = true,
}): React.ReactElement => (
  <button className={styles.button}>
    {external ? (
      <a className={styles.buttonLink} href={link} target={"_blank"}>
        {title}
      </a>
    ) : (
      <Link className={styles.buttonLink} to={link}>
        {title}
      </Link>
    )}
  </button>
);

export default Button;
