import { PropsWithChildren } from "react";
import styles from "./BannerTitle.module.css";

interface BannerTitleProps extends PropsWithChildren {
  src: string;
  height?: number;
  bgColor?: string;
  color?: string;
}

const BannerTitle: React.FC<BannerTitleProps> = ({
  src,
  height = 200,
  bgColor = "var(--primary-color)",
  color = "var(--tertiary-color)",
  children,
}): React.ReactElement => (
  <div
    className={styles.bannerImg}
    style={{
      backgroundImage: `url(${src})`,
      height: `${height}px`,
    }}
  >
    <h1
      className={styles.bannerTitle}
      style={{ color, backgroundColor: bgColor }}
    >
      {children}
    </h1>
  </div>
);

export default BannerTitle;
