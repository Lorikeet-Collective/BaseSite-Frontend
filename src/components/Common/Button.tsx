import type { PropsWithChildren } from "react";
import { Link } from "react-router";

interface ButtonProps extends PropsWithChildren {
  link?: string;
  isExternal?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  link,
  isExternal = false,
  children,
}): React.ReactElement => {
  return link ? (
    <button>
      {isExternal ? (
        <a href={link} target={"_blank"}>
          {children}
        </a>
      ) : (
        <Link to={link}>{children}</Link>
      )}
    </button>
  ) : (
    <button>{children}</button>
  );
};

export default Button;
