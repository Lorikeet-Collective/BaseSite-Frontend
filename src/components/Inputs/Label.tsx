import type { PropsWithChildren } from "react";
import styles from "./Label.module.css";

interface LabelProps extends PropsWithChildren {
  isRequired?: boolean;
}

const Label: React.FC<LabelProps> = ({
  isRequired = false,
  children,
}): React.ReactElement => (
  <label className={styles.label}>
    {children}
    {isRequired && <span className={styles.required}>*</span>}
  </label>
);

export default Label;
