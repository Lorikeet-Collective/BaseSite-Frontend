import { Link } from "react-router";
import MenuModal from "../MenuModal/MenuModal";
import Button from "../Common/Button";
import styles from "./Header.module.css";

const Header: React.FC = (): React.ReactElement => (
  <header className={styles.headerContainer}>
    <div>
      <h1>
        <Link to="/home">Lorikeet Collective</Link>
      </h1>
      {/* <img src="null" alt="logo" /> */}
    </div>
    <div>
      <Button isExternal link="https://lorikeetcollective.sessionshealth.com/">
        BOOK NOW
      </Button>
      <MenuModal />
    </div>
  </header>
);

export default Header;
