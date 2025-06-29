interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  inputName: string;
  placeholder?: string;
  isRequired?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  inputName,
  placeholder,
  isRequired = false,
}): React.ReactElement => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={inputName}
      required={isRequired}
    />
  );
};

export default Input;
