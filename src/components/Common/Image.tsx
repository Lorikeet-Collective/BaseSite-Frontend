import styles from "./Image.module.css";

interface ImageProps {
  src: string;
  fit?: boolean;
}

const Image: React.FC<ImageProps> = ({
  src,
  fit = false,
}): React.ReactElement =>
  fit ? (
    <img className={styles.imgFit} src={src} />
  ) : (
    <div
      className={styles.img}
      style={{
        backgroundImage: `url("${src}")`,
      }}
    ></div>
  );

export default Image;
