import { useState, useEffect } from 'react';

const useMarkHook = (quantity, markingType, isMarked) => {
  const [calculatedValue, setCalculatedValue] = useState(0);

  useEffect(() => {
    const isValidQuantity = !isNaN(quantity) && typeof quantity === 'number';
    const isValidMarkingType = markingType === 'single' || markingType === 'double';
    const isValidIsMarked = typeof isMarked === 'boolean';

    if (isValidQuantity && isValidMarkingType && isValidIsMarked) {
      let result = 0;

      if (isMarked) {
        result = markingType === 'single' ? quantity * 7 : markingType === 'double' ? quantity * 10 : 0;
      } else {
        result = 0;
      }

      setCalculatedValue(result);
    } else {
      setCalculatedValue(0);
    }
  }, [quantity, markingType, isMarked]);

  return calculatedValue;
};

export default useMarkHook;