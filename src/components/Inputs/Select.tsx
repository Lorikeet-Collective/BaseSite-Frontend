import type { PropsWithChildren } from "react";
import styles from "./Select.module.css";

interface SelectProps extends PropsWithChildren {
  inputName: string;
  defaultValue?: string;
  isRequired?: boolean;
}

const Select: React.FC<SelectProps> = ({
  inputName,
  defaultValue,
  isRequired = false,
  children,
}): React.ReactElement => {
  return (
    <select
      className={styles.select}
      name={inputName}
      defaultValue={defaultValue}
      required={isRequired}
    >
      {children}
    </select>
  );
};

export default Select;
