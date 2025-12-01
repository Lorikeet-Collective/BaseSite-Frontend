import { useState, useEffect } from "react";

const useWidth = (size: number = 1000): boolean => {
  const [isSize, setIsSize] = useState(window.innerWidth >= size);

  useEffect(() => {
    const event: EventListener = (e: Event): void =>
      setIsSize((e.target as Window).innerWidth >= size);
    addEventListener("resize", event);
    return () => removeEventListener("resize", event);
  }, [size]);

  return isSize;
};

export default useWidth;
