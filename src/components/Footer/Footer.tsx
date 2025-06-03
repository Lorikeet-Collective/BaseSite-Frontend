import styles from "./Footer.module.css";

const Footer: React.FC = (): React.ReactElement => {
  return (
    <footer className={styles.footerContainer}>
      <h2 className={styles.footerOrgName}>Lorikeet Collective, PLLC.</h2>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>Location</h3>
        <p>1 Liberty Square</p>
        <p>Suite 301</p>
        <p>New Britain, CT 06052</p>
      </div>
      <ul className={(styles.footerSection, styles.footerSectionLinks)}>
        <h3 className={styles.footerTitle}>Links</h3>
        <li className={styles.footerLink}>
          <a href="null">Contact</a>
        </li>
        <li className={styles.footerLink}>
          <a href="null">Help Squash Bugs</a>
        </li>
        <li className={styles.footerLink}>
          <a href="null">Privacy Policies</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
