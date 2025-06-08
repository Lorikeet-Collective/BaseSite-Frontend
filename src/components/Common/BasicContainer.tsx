import styles from "./BasicContainer.module.css";

interface BasicContainerProps {
  img?: string;
  header: string;
  useSubHeader?: boolean;
  body: string[];
}

const BasicContainer: React.FC<BasicContainerProps> = ({
  img,
  header,
  useSubHeader = true,
  body,
}): React.ReactElement => (
  <>
    {img && (
      <div
        className={`${styles.container} ${styles.img}`}
        style={{
          backgroundImage: `url("${img}")`,
        }}
      ></div>
    )}
    <div className={styles.container}>
      <h3 className={useSubHeader ? styles.subHeader : styles.header}>
        {header}
      </h3>
      {body.map((text) => (
        <p className={styles.textBody}>{text}</p>
      ))}
    </div>
  </>
);

export default BasicContainer;
