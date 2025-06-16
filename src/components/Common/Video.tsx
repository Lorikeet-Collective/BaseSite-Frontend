import styles from "./Video.module.css";

interface VideoProps {
  video: string;
}

const Video: React.FC<VideoProps> = ({ video }): React.ReactElement => {
  return (
    <iframe
      className={styles.video}
      src={video}
      title="YouTube video"
      allowFullScreen
    >
      Your browser does not support iFrame embedding.
    </iframe>
  );
};

export default Video;
