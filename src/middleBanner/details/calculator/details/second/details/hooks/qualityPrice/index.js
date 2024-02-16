import { useState, useEffect } from 'react';

const useQualityPrice = (initialQuantity) => {
  const [price, setPrice] = useState(0);
  const [controlType, setControlType] = useState('0');

  useEffect(() => {
    if (controlType === 'visual') {
      setPrice(initialQuantity * 9);
    } else if (controlType === 'detailed') {
      setPrice(initialQuantity * 20);
    } else {
      setPrice(0);
    }
  }, [controlType, initialQuantity]);

  const updateControlType = (newControlType) => {
    setControlType(newControlType);
  };

  return {
    price,
    updateControlType,
  };
};

export default useQualityPrice;