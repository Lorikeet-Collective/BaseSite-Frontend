import { Link } from "react-router";
import MenuModal from "./MenuModal/MenuModal";
import styles from "./Header.module.css";

const Header: React.FC = (): React.ReactElement => {

  return (
    <header className={styles.headerContainer}>
      <div>
        <h1 className={styles.headerName}>
          <Link to="/home">Lorikeet Collective</Link>
        </h1>
        <img src="null" alt="logo" />
      </div>
      <MenuModal />
    </header>
  );
};

export default Header;
