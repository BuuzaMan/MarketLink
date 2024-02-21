import { useEffect, useState } from 'react';

const useBoppCost = (selectedPackage, quantity) => {
  const [packageCost, setPackageCost] = useState(0);

  useEffect(() => {
    if (selectedPackage === 'bopp' && quantity) {
      const costMultiplier = 20;
      const totalCost = quantity * costMultiplier;
      setPackageCost(totalCost);
    } else {
      setPackageCost(0);
    }
  }, [selectedPackage, quantity]);

  return packageCost;
};

export default useBoppCost;