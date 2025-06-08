import { Link } from "react-router";
import styles from "./Button.module.css";

interface ButtonProps {
  title: string;
  link: string;
  isLocal?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  link,
  isLocal = true,
}): React.ReactElement => (
  <button className={styles.button}>
    {isLocal ? (
      <Link className={styles.buttonLink} to={link}>
        {title}
      </Link>
    ) : (
      <a className={styles.buttonLink} href={link} target={"_blank"}>
        {title}
      </a>
    )}
  </button>
);

export default Button;
