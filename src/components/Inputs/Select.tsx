import type { PropsWithChildren } from "react";

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
    <select name={inputName} defaultValue={defaultValue} required={isRequired}>
      {children}
    </select>
  );
};

export default Select;
