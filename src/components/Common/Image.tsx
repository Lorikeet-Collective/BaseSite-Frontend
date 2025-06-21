import styles from "./Image.module.css";

interface ImageProps {
  src: string;
  fit?: boolean;
  href?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  fit = false,
  href = "",
}): React.ReactElement => {
  const navigateToLink = () => window.open(href, "_blank");

  return fit ? (
    <img
      onClick={() => (href ? navigateToLink() : undefined)}
      className={styles.imgFit}
      src={src}
    />
  ) : (
    <div
      onClick={() => (href ? navigateToLink() : undefined)}
      className={styles.img}
      style={{
        backgroundImage: `url("${src}")`,
      }}
    ></div>
  );
};

export default Image;
