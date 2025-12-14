import { useState, useEffect } from "react";

interface SinWaveProps {
    width?: number;
    height?: number;
    amplitude?: number;
    frequency?: number;
    useDynamicHeight?: boolean;
}

const SinWave: React.FC<SinWaveProps> = ({
    width = window.innerWidth,
    height = 25,
    amplitude = 7,
    frequency = 0.05,
    useDynamicHeight = false,
}): React.ReactElement => {
    const [sinData, setSinData] = useState({
        width,
        height,
        amplitude,
        frequency,
    });

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

    const getComputedMenuHeight = (): string => {
        return getComputedStyle(document.documentElement).getPropertyValue(
            "--menu-link-height"
        );
    };

    useEffect(() => {
        const event: EventListener = (e: Event): void =>
            setSinData((prevData) => ({
                ...prevData,
                width: (e.target as Window).innerWidth,
            }));
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
            height={useDynamicHeight ? getComputedMenuHeight() : sinData.height}
            viewBox={`0 0 ${sinData.width} ${sinData.height}`}
        >
            <path
                d={`M0,${sinData.height / 2} ${generateSinWavePath(sinData)}`}
                fill="none"
                strokeWidth={1.2}
                stroke={"var(--tertiary-color)"}
            />
        </svg>
    );
};

export default SinWave;
