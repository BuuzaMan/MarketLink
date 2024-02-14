import React from 'react'
import Quantity from './details/quantity';
import Size from './details/size';
import PickUp from './details/pickup';
import CargoVolume from './details/cargoVolume';
import Marking from './details/marking';
import StepOne from './details/stepOne';
import useProductPrice from './details/hooks';

const First = () => {  
  const productPrice = useProductPrice();

  const handleCargoVolumeChange = (volumePrice) => {
    console.log('Цена за объем:', volumePrice);
  };
  const handleQuantityChange = (quantity) => {
    console.log('Количество товара:', quantity);
    
  };
  const handleSizeChange = (sizeData) => {
    console.log('Объем:', sizeData);
  }
  const handleMarkingChange = (markType) => {
    console.log('Тип маркировки:', markType);
    
  };

  return (
    <div className='flex flex-col mt-[17px] ml-[35px] w-[336px] h-[419px]'>
        <StepOne />
        <div className='flex flex-row w-[236px] h-[68px] gap-x-2 mt-[18px]'>
            <Quantity onQuantityChange={handleQuantityChange}/>  
            <Size onSizeChange={handleSizeChange}/>
        </div>
        <PickUp />
        <CargoVolume onCargoVolumeChange={handleCargoVolumeChange}/>
        <Marking onMarkingChange={handleMarkingChange}/>
        <div>
        Стоимость товара: {productPrice}
      </div>
    </div>
    
    
  );
};

export default First;
