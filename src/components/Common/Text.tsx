import { PropsWithChildren } from "react";
import styles from "./Text.module.css";

const Text: React.FC<PropsWithChildren> = ({
  children,
}): React.ReactElement => <p className={styles.text}>{children}</p>;

export default Text;
