import { useEffect, useState } from 'react';

const useBubbleWrapCost = (sizeData, quantity, packageType) => {
  const [bubbleWrapCost, setBubbleWrapCost] = useState(0);

  useEffect(() => {
    if (packageType === 'bubbleWrap' && sizeData && quantity) {
      const numericWidth = Number(sizeData.width);
      const numericHeight = Number(sizeData.height);
      const numericQuantity = Number(quantity);

      const X = (numericWidth + numericHeight) * 2 + 5;
      let costMultiplier = 0;

      if (X >= 25 && X <= 30) {
        costMultiplier = 21;
      } else if (X >= 31 && X <= 40) {
        costMultiplier = 28;
      } else if (X >= 41 && X <= 50) {
        costMultiplier = 35;
      } else if (X >= 51 && X <= 60) {
        costMultiplier = 42;
      } else if (X >= 61 && X <= 70) {
        costMultiplier = 49;
      }

      const totalCost = numericQuantity * costMultiplier;
      setBubbleWrapCost(totalCost);
    } else {
      setBubbleWrapCost(0);
    }
  }, [sizeData, quantity, packageType]);

  return bubbleWrapCost;
};

export default useBubbleWrapCost;