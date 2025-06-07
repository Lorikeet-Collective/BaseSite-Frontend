import styles from "./Home.module.css";

const Home: React.FC = (): React.ReactElement => {
  return (
    <main>
      <div className={styles.welcomeContainer}>
        <div className={styles.welcomeBackground}></div>
        <h1 className={styles.welcomeHeader}>Welcome to the Collective</h1>
      </div>
    </main>
  );
};

export default Home;
