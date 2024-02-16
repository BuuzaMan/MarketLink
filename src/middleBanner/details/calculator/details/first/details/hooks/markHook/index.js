import { useState, useEffect } from 'react';

const useCustomHook = (quantity, markingType) => {
  const [calculatedValue, setCalculatedValue] = useState(0);

  useEffect(() => {
    console.log('quantity:', quantity);
    console.log('markingType:', markingType);

    const isValidQuantity = !isNaN(quantity) && typeof quantity === 'number';
    const isValidMarkingType = markingType === 'single' || markingType === 'double';

    if (isValidQuantity && isValidMarkingType) {
      const result = markingType === 'single' ? quantity * 7 : quantity * 10;
      console.log('result:', result);
      setCalculatedValue(result);
    } else {
      setCalculatedValue(0);
    }
  }, [quantity, markingType]);

  console.log('Calculated Value:', calculatedValue);

  return calculatedValue;
};

export default useCustomHook;
