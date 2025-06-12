interface SinWaveProps {
  width?: number;
  height?: number;
  amplitude?: number;
  frequency?: number;
}

const SineWave: React.FC<SinWaveProps> = ({
  width = window.innerWidth,
  height = 25,
  amplitude = 7,
  frequency = 0.05,
}): React.ReactElement => {
  const generateSineWavePath = (
    width: number,
    height: number,
    amplitude: number,
    frequency: number
  ): string => {
    let path: string = "";
    for (let i = 0; i <= width; i++) {
      const y = height / 2 + amplitude * Math.sin(i * frequency);
      path += `${i},${y} `;
    }
    return `L${path}`;
  };
  const pathData: string = `M0,${height / 2} ${generateSineWavePath(
    width,
    height,
    amplitude,
    frequency
  )}`;
  return (
    <svg width={"100%"} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path d={pathData} fill="none" stroke={`var(--tertiary-color)`} />
    </svg>
  );
};

export default SineWave;
