import { Link } from "react-router";
import styles from "./Footer.module.css";

const Footer: React.FC = (): React.ReactElement => (
  <footer className={styles.footerContainer}>
    <h2>Lorikeet Collective, PLLC.</h2>
    <h3>Location</h3>
    <p>1 Liberty Square</p>
    <p>Suite 301</p>
    <p>New Britain, CT 06052</p>
    <h3>Links</h3>
    <ul>
      <li>
        <Link to={"null"}>Contact</Link>
      </li>
      <li>
        <Link to={"null"}>Help Squash Bugs</Link>
      </li>
      <li>
        <Link to={"null"}>Privacy Policies</Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
