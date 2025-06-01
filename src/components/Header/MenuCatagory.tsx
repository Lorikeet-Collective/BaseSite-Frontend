interface MenuCatagoryProps {
  title?: string;
  children: React.ReactNode[];
}

const MenuCatagory: React.FC<MenuCatagoryProps> = ({
  children,
  title,
}): React.ReactElement => {
  return (
    <li>
      {title}
      <ul>{...children.map((elem) => <li>{elem}</li>)}</ul>
    </li>
  );
};

export default MenuCatagory;
