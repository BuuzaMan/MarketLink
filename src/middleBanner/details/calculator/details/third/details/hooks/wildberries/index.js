import { useEffect, useState } from 'react';

const useWildberries = (volume, selectedMarketplace, selectedWarehouse) => {
  const [deliveryCost, setDeliveryCost] = useState(0);

  useEffect(() => {
    const boxVol = volume + (volume * 0.03)
    let box = 96000 / boxVol;
    const roundedBox = Math.ceil(box);
  

    const calculateDeliveryCost = () => {
      let cost = 0;

      if (selectedMarketplace === 'ВБ' && selectedWarehouse === 'Коледино') {
        cost = roundedBox * 200;
      } else if (selectedMarketplace === 'ВБ' && selectedWarehouse === 'Электросталь') {
        cost = roundedBox * 200;
      } else if (selectedMarketplace === 'ВБ' && selectedWarehouse === 'Алексин') {
        cost = roundedBox * 400;
      } else if (selectedMarketplace === 'ВБ' && selectedWarehouse === 'Казань') {
        cost = roundedBox * 700;
      } else if (selectedMarketplace === 'ВБ' && selectedWarehouse === 'Уткина Заводь') {
        cost = roundedBox * 700;
      }

      setDeliveryCost(cost);
    };

    calculateDeliveryCost();
  }, [volume, selectedMarketplace, selectedWarehouse]);


  return deliveryCost;
};

export default useWildberries;