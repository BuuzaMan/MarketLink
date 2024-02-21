import { useEffect, useState } from 'react';

const useWildberries = (volume, selectedMarketplace, selectedWarehouse) => {
  const [deliveryCost, setDeliveryCost] = useState(0);

  useEffect(() => {
    const calculateDeliveryCost = () => {
      if (selectedMarketplace === 'wildberries') {
        let baseCost = 96000;
        const Y = volume + (volume * 0.03);
        console.log(volume)
        const box = baseCost / Y;
        const roundedBox = Math.ceil(box);
     
        if (selectedWarehouse === 'Коледино') {
          setDeliveryCost(roundedBox * 200);
        } else if (selectedWarehouse === 'Электросталь') {
          setDeliveryCost(roundedBox * 200);
        } else if (selectedWarehouse === 'Алексин') {
          setDeliveryCost(roundedBox * 400);
        } else if (selectedWarehouse === 'Казань' || selectedWarehouse === 'Уткина Заводь') {
          setDeliveryCost(roundedBox * 700);
        } else {
          setDeliveryCost(0);
        }
      } else {
        setDeliveryCost(0);
      }
    };

    calculateDeliveryCost();
  }, [volume, selectedMarketplace, selectedWarehouse]);

  return deliveryCost;
};

export default useWildberries;