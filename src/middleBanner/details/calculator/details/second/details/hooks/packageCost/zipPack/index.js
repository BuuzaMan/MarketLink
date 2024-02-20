import { useEffect, useState } from 'react';

const useZipPackageCost = (size, quantity, packageType) => {
  const [zipPackageCost, setZipPackageCost] = useState(0);

  useEffect(() => {
    const sizeCoefficients = {
      '15*20': 9,
      '20*25': 11,
      '20*30': 12,
      '25*35': 14,
      '30*40': 17,
      '35*45': 19,
      '40*50': 20,
      '50*60': 26,
      '50*70': 27,
    };

    if (packageType === 'zip' && sizeCoefficients[size]) {
      const costMultiplier = sizeCoefficients[size];
      const totalCost = quantity * costMultiplier;
      setZipPackageCost(totalCost);
    } else {
      setZipPackageCost(0);
    }
  }, [size, quantity, packageType]);

  return zipPackageCost;
};

export default useZipPackageCost;