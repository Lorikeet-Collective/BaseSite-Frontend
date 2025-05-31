import { useState } from "react";
import { Link } from "react-router";
import { enterIcon } from "../SVG/icons";
import SVGIcon from "../SVG/SVGIcon";
import MenuModal from "./MenuModal";
import styles from "./Header.module.css";

const Header: React.FC = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div>
        <h1 className={styles.headerName}>
          <Link to="/home">Lorikeet Collective</Link>
        </h1>
        <img src="null" alt="logo" />
      </div>
      <nav>
        {isModalOpen ? (
          <MenuModal setIsModalOpen={setIsModalOpen} />
        ) : (
          <SVGIcon icon={enterIcon} interaction={() => setIsModalOpen(true)} />
        )}
      </nav>
    </header>
  );
};

export default Header;
