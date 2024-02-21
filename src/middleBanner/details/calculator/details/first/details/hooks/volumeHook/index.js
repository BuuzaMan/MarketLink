import { useEffect, useState } from "react";

const useVolumeCalculation = (newSizeData) => {
  const [calculatedVolume, setCalculatedVolume] = useState(0);

  useEffect(() => {
    const calculateVolume = () => {

      if (
        newSizeData &&
        typeof newSizeData === 'object' &&
        !isNaN(newSizeData.length) &&
        !isNaN(newSizeData.width) &&
        !isNaN(newSizeData.height)
      ) {
        const { length, width, height } = newSizeData;
        const numericLength = Number(length);
        const numericWidth = Number(width);
        const numericHeight = Number(height);

        setCalculatedVolume(numericLength * numericWidth * numericHeight);
      } else {
        setCalculatedVolume(0);
      }
    };

    calculateVolume();
  }, [newSizeData]);

  return calculatedVolume;
};

export default useVolumeCalculation;