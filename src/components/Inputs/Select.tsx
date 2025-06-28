import type { PropsWithChildren } from "react";
import styles from "./Select.module.css";

interface SelectProps extends PropsWithChildren {
  label: string;
  inputName: string;
  defaultValue?: string;
  isRequired?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  inputName,
  defaultValue,
  isRequired = false,
  children,
}): React.ReactElement => {
  return (
    <>
      <label className={styles.label}>
        {label}
        {isRequired && <span className={styles.required}>*</span>}
      </label>
      <select
        className={styles.select}
        name={inputName}
        defaultValue={defaultValue}
        required={isRequired}
      >
        {children}
      </select>
    </>
  );
};

export default Select;
