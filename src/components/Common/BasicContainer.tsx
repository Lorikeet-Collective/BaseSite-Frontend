import styles from "./BasicContainer.module.css";

interface BasicContainerProps {
  img: string;
  header: string;
  body: string[];
}

const BasicContainer: React.FC<BasicContainerProps> = ({
  img,
  header,
  body,
}): React.ReactElement => (
  <>
    <div
      className={`${styles.container} ${styles.img}`}
      style={{
        backgroundImage: `url("${img}")`,
      }}
    ></div>
    <div className={styles.container}>
      <h3 className={styles.header}>{header}</h3>
      {body.map((text) => (
        <p className={styles.textBody}>{text}</p>
      ))}
    </div>
  </>
);

export default BasicContainer;
