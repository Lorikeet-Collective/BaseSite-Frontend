import { Link } from "react-router";
import styles from "./Footer.module.css";
import lorikeetLogo from "../../assets/logos/lorikeet-logo.png";

const Footer: React.FC = (): React.ReactElement => (
    <footer className={styles.footerContainer}>
        <div className={styles.footerLogoContainer}>
            <img src={lorikeetLogo} alt="Lorikeet Collective logo" />
            <h2>Lorikeet Collective, PLLC.</h2>
        </div>
        <div className={styles.footerInfoContainer}>
            <div className={styles.footerSubcontainer}>
                <h3>Location</h3>
                <address>
                    1 Liberty Square
                    <br />
                    Suite 301
                    <br />
                    New Britain, CT 06052
                </address>
            </div>
            <div className={styles.footerSubcontainer}>
                <h3>Links</h3>
                <ul>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to={"null"}>Help Squash Bugs</Link>
                    </li>
                    <li>
                        <Link to={"null"}>Privacy Policies</Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;
