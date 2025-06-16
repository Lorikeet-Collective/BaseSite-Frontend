import styles from "./Title.module.css";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }): React.ReactElement => (
  <h2 className={styles.title}>{title}</h2>
);

export default Title;
