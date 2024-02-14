import { useState, useEffect } from 'react';

const useProductPrice = (quantity, markType) => {
  const [productPrice, setProductPrice] = useState();

  useEffect(() => {
    let price = quantity;

    if (markType === 'single') {
      price *= 7;
    }
    
    setProductPrice(price);
  }, [quantity, markType]);

  return productPrice;
};

export default useProductPrice;