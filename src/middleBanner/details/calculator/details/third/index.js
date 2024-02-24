import React, { useState } from 'react'
import Warehouse from './details/index';
import useVolumeCalculation from '../first/details/hooks/volumeHook';
import useDeliveryCostCalculation from './details/hooks/other';
import useWildberries from './details/hooks/wildberries/index';


const Third = ( sizeData,onTotalChange ) => {
  const volume = useVolumeCalculation(sizeData.sizeData);
  const [selectedMarketplace, setSelectedMarketplace] = useState('');
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
 

  const handleMarketplaceSelect = (marketplace) => {
    setSelectedMarketplace(marketplace);
  };

  const handleWarehouseSelect = (warehouse) => {
    setSelectedWarehouse(warehouse);
  };
  const deliveryCost = useDeliveryCostCalculation(volume, selectedMarketplace);
  const deliveryPrice = useWildberries(volume, selectedMarketplace, selectedWarehouse);
  const total = deliveryCost + deliveryPrice
  onTotalChange(total);
  console.log(total)

  return (
    <div className='flex flex-col mt-[17px] ml-[29px]'>
        <div className='w-[37px] font-lato text-[13px] font-bold leading-[1.376rem] bg-gradient-to-r from-[#EB1988] to-[#005AF9] inline-block text-transparent bg-clip-text'>Шаг 3</div>
        <div><Warehouse onMarketplaceSelect={handleMarketplaceSelect} onWarehouseSelect={handleWarehouseSelect}/></div>
    </div>
    
  )
};

export default Third;
