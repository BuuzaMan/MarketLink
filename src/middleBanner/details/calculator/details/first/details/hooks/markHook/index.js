import { useState, useEffect } from 'react';

const useMarkHook = (quantity, markingType) => {
  const [calculatedValue, setCalculatedValue] = useState(0);

  useEffect(() => {
    const isValidQuantity = !isNaN(quantity) && typeof quantity === 'number';
    const isValidMarkingType = markingType === 'single' || markingType === 'double';

    if (isValidQuantity && isValidMarkingType) {
      const result = markingType === 'single' ? quantity * 7 : quantity * 10;
      setCalculatedValue(result);
    } else {
      setCalculatedValue(0);
    }
  }, [quantity, markingType]);


  return calculatedValue;
};

export default useMarkHook;