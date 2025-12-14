interface VideoProps {
    src: string;
}

const Video: React.FC<VideoProps> = ({ src }): React.ReactElement => (
    <iframe src={src} title="YouTube video" allowFullScreen>
        Your browser does not support iFrame embedding.
    </iframe>
);

export default Video;
