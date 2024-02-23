import { useEffect, useState } from 'react';

const useDeliveryCostCalculation = (volume, selectedMarketplace) => {
  const [deliveryCost, setDeliveryCost] = useState(0);

  useEffect(() => {
    const calculateDeliveryCost = () => {
      if (selectedMarketplace === 'Озон' || selectedMarketplace === 'Яндекс') {
        const baseCost = 96000;
        const Y = volume + (volume * 0.03);
        const box = baseCost / Y; 
        const roundedBox = Math.ceil(box);
        const cost = roundedBox * 200;
        setDeliveryCost(cost);
      } else {
        setDeliveryCost(0);
      }
    };

    calculateDeliveryCost();
  }, [volume, selectedMarketplace]);

  return deliveryCost;
};

export default useDeliveryCostCalculation;