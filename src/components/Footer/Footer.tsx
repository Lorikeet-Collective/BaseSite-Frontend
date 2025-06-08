import { Link } from "react-router";
import styles from "./Footer.module.css";

const Footer: React.FC = (): React.ReactElement => (
  <footer className={styles.footerContainer}>
    <h2 className={styles.footerOrgName}>Lorikeet Collective, PLLC.</h2>
    <div className={`${styles.footerSection} ${styles.footerSectionAddress}`}>
      <h3 className={styles.footerHeader}>Location</h3>
      <p>1 Liberty Square</p>
      <p>Suite 301</p>
      <p>New Britain, CT 06052</p>
    </div>
    <ul className={`${styles.footerSection} ${styles.footerSectionLinks}`}>
      <h3 className={styles.footerHeader}>Links</h3>
      <li className={styles.footerLinkContainer}>
        <Link className={styles.footerLink} to={"null"}>
          Contact
        </Link>
      </li>
      <li className={styles.footerLinkContainer}>
        <Link className={styles.footerLink} to={"null"}>
          Help Squash Bugs
        </Link>
      </li>
      <li className={styles.footerLinkContainer}>
        <Link className={styles.footerLink} to={"null"}>
          Privacy Policies
        </Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
