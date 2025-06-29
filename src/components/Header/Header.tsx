import { Link } from "react-router";
import MenuModal from "../MenuModal/MenuModal";
import Button from "../Common/Button";
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
    <Button
      isSmall
      external
      link="https://lorikeetcollective.sessionshealth.com/"
    >
      BOOK NOW
    </Button>
    <MenuModal />
  </header>
);

export default Header;
