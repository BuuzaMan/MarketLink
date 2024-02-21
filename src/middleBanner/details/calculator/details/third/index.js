import React, { useState } from 'react'
import Warehouse from './details/index';
import useVolumeCalculation from '../first/details/hooks/volumeHook';
import useDeliveryCostCalculation from './details/hooks';
import useWildberries from './details/hooks/wildberries';


const Third = (sizeData) => {
  const volume = useVolumeCalculation(sizeData.sizeData);
  const [selectedMarketplace, setSelectedMarketplace] = useState('');
  console.log(selectedMarketplace)
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  console.log(selectedWarehouse)

  const handleMarketplaceSelect = (marketplace) => {
    setSelectedMarketplace(marketplace);
  };

  const handleWarehouseSelect = (warehouse) => {
    setSelectedWarehouse(warehouse);
  };
  const deliveryCost = useDeliveryCostCalculation(volume, selectedMarketplace);
  const deliveryPrice = useWildberries(volume, selectedMarketplace, selectedWarehouse);



  return (
    <div className='flex flex-col mt-[17px] ml-[29px]'>
        <div className='w-[37px] font-lato text-[13px] font-bold leading-[1.376rem] bg-gradient-to-r from-[#EB1988] to-[#005AF9] inline-block text-transparent bg-clip-text'>Шаг 3</div>
        <div><Warehouse onMarketplaceSelect={handleMarketplaceSelect} onWarehouseSelect={handleWarehouseSelect}/></div>
    </div>
  )
};

export default Third;
