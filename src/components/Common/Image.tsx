import styles from "./Image.module.css";

interface ImageProps {
  img: string;
}

const Image: React.FC<ImageProps> = ({ img }): React.ReactElement => (
  <div
    className={`${styles.imgContainer} ${styles.img}`}
    style={{
      backgroundImage: `url("${img}")`,
    }}
  ></div>
);

export default Image;
