import { Link } from "react-router";

interface MenuLinkProps {
  to: string;
  title: string;
  external?: boolean;
}

const MenuLink: React.FC<MenuLinkProps> = ({
  to,
  title,
  external = false,
}): React.ReactElement => {
  const linkType = () => {
    return (
      <li>
        {external ? (
          <a href={to} target="_blank">
            {title}
          </a>
        ) : (
          <Link to={to}>{title}</Link>
        )}
      </li>
    );
  };

  return linkType();
};

export default MenuLink;
