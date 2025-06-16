import { Link } from "react-router";
import styles from "./MenuLink.module.css";

interface MenuLinkProps {
  to: string;
  title: string;
  exitHandler: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({
  to,
  title,
  exitHandler,
}): React.ReactElement => (
  <li className={styles.menuLinkContainer}>
    <Link className={styles.menuLink} to={to} onClick={exitHandler}>
      {title}
    </Link>
  </li>
);

export default MenuLink;
