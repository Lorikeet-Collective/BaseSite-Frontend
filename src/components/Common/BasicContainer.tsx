import Image from "./Image";
import styles from "./BasicContainer.module.css";

interface BasicContainerProps {
  img?: string;
  header?: string;
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
    {img && <Image img={img} />}
    <div className={styles.container}>
      {header && (
        <h3 className={useSubHeader ? styles.subHeader : styles.header}>
          {header}
        </h3>
      )}
      {body.map((text, i) => (
        <p key={i + Math.random()} className={styles.textBody}>
          {text}
        </p>
      ))}
    </div>
  </>
);

export default BasicContainer;
