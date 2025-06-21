import Image from "./Image";
import styles from "./BasicContainer.module.css";
import { PropsWithChildren } from "react";

interface BasicContainerProps extends PropsWithChildren {
  img?: string;
  header?: string;
  useSubHeader?: boolean;
}

const BasicContainer: React.FC<BasicContainerProps> = ({
  img,
  header,
  useSubHeader = true,
  children,
}): React.ReactElement => (
  <>
    {img && <Image img={img} />}
    <div className={styles.container}>
      {header && (
        <h3 className={useSubHeader ? styles.subHeader : styles.header}>
          {header}
        </h3>
      )}
      {children}
    </div>
  </>
);

export default BasicContainer;
