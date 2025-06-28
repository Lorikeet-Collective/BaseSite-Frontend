import styles from "./Input.module.css";

interface InputProps {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  inputName: string;
  placeholder?: string;
  isRequired?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  inputName,
  placeholder,
  isRequired = false,
}): React.ReactElement => {
  return (
    <>
      <label className={styles.label}>
        {label}
        {isRequired && <span className={styles.required}>*</span>}
      </label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={inputName}
        required={isRequired}
      />
    </>
  );
};

export default Input;
