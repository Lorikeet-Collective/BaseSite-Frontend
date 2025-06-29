import type { PropsWithChildren } from "react";
import { Link } from "react-router";

interface ButtonProps extends PropsWithChildren {
  link?: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  link,
  external = true,
  children,
}): React.ReactElement => {
  return link ? (
    <button>
      {external ? (
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
