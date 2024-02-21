import { useEffect, useState } from 'react';

const useSealedPackCost = (sizeData, quantity, packageType) => {
  const [sealedPackCost, setSealedPackCost] = useState(0);

  useEffect(() => {
    if (packageType === 'sealedSleeve' && sizeData && quantity) {
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
      setSealedPackCost(totalCost);
    } else {
      setSealedPackCost(0);
    }
  }, [sizeData, quantity, packageType]);

  return sealedPackCost;

};

export default useSealedPackCost;