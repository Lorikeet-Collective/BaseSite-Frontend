import styles from "./TextArea.module.css";

interface TextAreaProps {
  label: string;
  inputName: string;
  placeholder?: string;
  isRequired?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
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
      <textarea
        className={styles.textArea}
        rows={5}
        name={inputName}
        placeholder={placeholder}
        required={isRequired}
      />
    </>
  );
};

export default TextArea;
