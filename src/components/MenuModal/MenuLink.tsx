import { Link } from "react-router";
import styles from "./MenuLink.module.css";

interface MenuLinkProps {
  to: string;
  title: string;
  external?: boolean;
}

const MenuLink: React.FC<MenuLinkProps> = ({
  to,
  title,
  external = false,
}): React.ReactElement => (
  <li className={styles.menuLinkContainer}>
    {external ? (
      <a href={to} target="_blank">
        {title}
      </a>
    ) : (
      <Link className={styles.menuLink} to={to}>
        {title}
      </Link>
    )}
  </li>
);

export default MenuLink;
