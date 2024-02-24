import { useState, useEffect } from 'react';

const useQualityPrice = (initialQuantity, qualityControlOption) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (qualityControlOption === 'visual') {
      setPrice(initialQuantity * 9);
    } else if (qualityControlOption === 'detailed') {
      setPrice(initialQuantity * 20);
    } else {
      setPrice(0);
    }
  }, [qualityControlOption, initialQuantity]);

  return price;
};

export default useQualityPrice;