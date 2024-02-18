import { useEffect, useState } from "react";

const useVolumeCalculation = (newSizeData) => {
    const [calculatedVolume, setCalculatedVolume] = useState(0);
    useEffect(() => {
      const calculateVolume = () => {
        if (newSizeData && typeof newSizeData === 'object') {
          const { length, width, height } = newSizeData;
          setCalculatedVolume(length * width * height);
        } else {
          setCalculatedVolume(0);
        }
      };
  
      calculateVolume();
    }, [newSizeData]);
  
    return calculatedVolume;
  };
  
  export default useVolumeCalculation;