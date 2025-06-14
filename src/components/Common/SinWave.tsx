import { useState, useEffect } from "react";

interface SinWaveProps {
  width?: number;
  height?: number;
  amplitude?: number;
  frequency?: number;
}

const generateSinWavePath = ({
  width,
  height,
  amplitude,
  frequency,
}: SinWaveProps): string => {
  let path: string = "";
  for (let i = 0; i <= width!; i++) {
    const y = height! / 2 + amplitude! * Math.sin(i * frequency!);
    path += `${i},${y} `;
  }
  return `L${path}`;
};

const SinWave: React.FC<SinWaveProps> = ({
  width = window.innerWidth,
  height = 25,
  amplitude = 7,
  frequency = 0.05,
}): React.ReactElement => {
  const [sinData, setSinData] = useState({
    width,
    height,
    amplitude,
    frequency,
  });

  useEffect(() => {
    const event: EventListener = (e: Event) => {
      const target = e.target as Window;
      setSinData((prevData) => ({
        ...prevData,
        width: target.innerWidth,
      }));
    };
    addEventListener("resize", event);
    return () => removeEventListener("resize", event);
  }, []);

  useEffect(
    () => setSinData({ width, height, frequency, amplitude }),
    [width, height, frequency, amplitude]
  );

  return (
    <svg
      width={"100%"}
      height={sinData.height}
      viewBox={`0 0 ${sinData.width} ${sinData.height}`}
    >
      <path
        d={`M0,${sinData.height / 2} ${generateSinWavePath(sinData)}`}
        fill="none"
        stroke={`var(--tertiary-color)`}
      />
    </svg>
  );
};

export default SinWave;
