import { useState, useEffect } from 'react';

const useTagPrice = (quantity, tagAttached) => {
  const [tagPrice, setTagPrice] = useState(0);

  useEffect(() => {
    if (tagAttached === 'yes') {
      const newTagPrice = quantity * 9;
      setTagPrice(newTagPrice);
    } else {
      setTagPrice(0);
    }
  }, [quantity, tagAttached]);

  return tagPrice;
};

export default useTagPrice;