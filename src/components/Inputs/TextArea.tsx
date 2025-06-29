interface TextAreaProps {
  inputName: string;
  placeholder?: string;
  isRequired?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  inputName,
  placeholder,
  isRequired = false,
}): React.ReactElement => {
  return (
    <textarea
      rows={5}
      name={inputName}
      placeholder={placeholder}
      required={isRequired}
    />
  );
};

export default TextArea;
