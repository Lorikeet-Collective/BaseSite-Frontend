import { useState, useEffect } from "react";

interface SinWaveProps {
  width?: number;
  height?: number;
  amplitude?: number;
  frequency?: number;
}

interface SinData {
  width: number;
  height: number;
  amplitude: number;
  frequency: number;
}

const SineWave: React.FC<SinWaveProps> = ({
  width = window.innerWidth,
  height = 25,
  amplitude = 7,
  frequency = 0.05,
}): React.ReactElement => {
  const [sinData, setSinData] = useState<SinData>({
    width,
    height,
    amplitude,
    frequency,
  });

  useEffect(() => {
    const event: EventListener = (e: Event) => {
      const target = e.target as Window;
      setSinData((prevData) => ({ ...prevData, width: target.innerWidth }));
    };
    addEventListener("resize", event);
    return () => removeEventListener("resize", event);
  }, []);

  const generateSineWavePath = (): string => {
    let path: string = "";
    for (let i = 0; i <= sinData.width; i++) {
      const y =
        sinData.height / 2 +
        sinData.amplitude * Math.sin(i * sinData.frequency);
      path += `${i},${y} `;
    }
    return `L${path}`;
  };

  const pathData: string = `M0,${sinData.height / 2} ${generateSineWavePath()}`;
  
  return (
    <svg
      width={"100%"}
      height={sinData.height}
      viewBox={`0 0 ${sinData.width} ${sinData.height}`}
    >
      <path d={pathData} fill="none" stroke={`var(--tertiary-color)`} />
    </svg>
  );
};

export default SineWave;
