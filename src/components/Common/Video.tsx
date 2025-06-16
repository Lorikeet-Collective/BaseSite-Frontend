import styles from "./Video.module.css";

interface VideoProps {
  video: string;
}

const Video: React.FC<VideoProps> = ({ video }): React.ReactElement => {
  return (
    <div className={styles.videoContainer}>
      <iframe
        className={styles.video}
        src={video}
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
