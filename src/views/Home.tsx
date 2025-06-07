import styles from "./Home.module.css";

const Home: React.FC = (): React.ReactElement => {
  return (
    <main>
      <div className={`${styles.container} ${styles.welcomeContainer}`}>
        <div className={styles.welcomeBackground}></div>
        <h1 className={styles.welcomeHeader}>Welcome to the Collective</h1>
      </div>
      <h2 className={`${styles.container} ${styles.subHeaderContainer}`}>
        <p className={styles.topHeader}>Therapy for your community,</p>
        <p className={styles.bottomHeader}>by your community</p>
      </h2>
      <div
        className={`${styles.container} ${styles.img}`}
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/67d14d44c6a49e3d4d030b00/1744681200969-JXHJHCYRVIF83TMDSWQO/unsplash-image-rTXxVtMn8PA.jpg?format=1500w')",
        }}
      ></div>
      <div className={styles.container}>
        <h3 className={styles.header}>Transforming LGBTQIA2S+ care</h3>
        <p className={styles.textBody}>
          We’re gender identity, expression, sexual orientation, and
          relationship orientation/ ethical non-monogamy (ENM)/ polyamorous
          (poly) competent and affirming, with a variety of lived experiences.
        </p>
        <p className={styles.textBody}>
          We’re also sex-, kink-, and BDSM-positive, pro-choice, and believe sex
          work is work.
        </p>
      </div>
      <div
        className={`${styles.container} ${styles.img}`}
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/67d14d44c6a49e3d4d030b00/1744681250970-13D5RP35PLA2RE62K3DO/unsplash-image-FHiJWoBodrs.jpg?format=1500w')",
        }}
      ></div>
      <div className={styles.container}>
        <h3 className={styles.header}>Celebrating disabilities</h3>
        <p className={styles.textBody}>
          We elevate individuality, equitable representation, empowerment,
          accessibility, and self-acceptance— not in spite of disability, but
          because of it.
        </p>
        <p className={styles.textBody}>
          We offer inclusive therapy founded on the principle that disabled folx
          should feel safe to take up space in every space within their
          community without censorship.
        </p>
      </div>
      <div
        className={`${styles.container} ${styles.img}`}
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/67d14d44c6a49e3d4d030b00/1744681287149-1TYWZ82T6WR9UIYGGY0N/unsplash-image-aM-BRQtrng8.jpg?format=1500w')",
        }}
      ></div>
      <div className={styles.container}>
        <h3 className={styles.header}>Uplifting voices of color</h3>
        <p className={styles.textBody}>
          We honor our BIPOC, AAPI, Latinx/ Hispanix and all non-White
          identifying communities by challenging systemic racial biases in and
          out of therapeutic spaces, advocating for racial, ethnic, and cultural
          equity in legislature, and driving accountability for our therapists
          to engage in continuing education by clinicians of color.
        </p>
        <p className={styles.textBody}>
          We believe Black lives Matter and that nobody is illegal on stolen
          land.
        </p>
      </div>
    </main>
  );
};

export default Home;
