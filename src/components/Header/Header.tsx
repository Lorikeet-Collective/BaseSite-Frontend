import { Link } from "react-router";
import MenuModal from "../MenuModal/MenuModal";
import styles from "./Header.module.css";

const Header: React.FC = (): React.ReactElement => (
  <header className={styles.headerContainer}>
    <div className={styles.orgContainer}>
      <h1 className={styles.orgName}>
        <Link className={styles.orgLink} to="/home">
          Lorikeet Collective
        </Link>
      </h1>
      <img src="null" alt="logo" />
    </div>
    <button className={styles.bookBtn}>
      <a
        className={styles.bookBtnLink}
        href="https://lorikeetcollective.sessionshealth.com/"
        target="_blank"
      >
        BOOK NOW
      </a>
    </button>
    <MenuModal />
  </header>
);

export default Header;
