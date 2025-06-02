import styles from "./MenuCatagory.module.css";

interface MenuCatagoryProps {
  title?: string;
  children: React.ReactNode[];
}

const MenuCatagory: React.FC<MenuCatagoryProps> = ({
  children,
  title,
}): React.ReactElement => {
  return (
    <>
      <li className={styles.menuCatagoryTitle}>{title}</li>
      <ul className={styles.menuCatagoryContainer}>{...children}</ul>
    </>
  );
};

export default MenuCatagory;
