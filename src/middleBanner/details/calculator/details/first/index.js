import React from 'react'
import Quantity from './details/quantity';
import Size from './details/size';
import PickUp from './details/pickup';
import CargoVolume from './details/cargoVolume';
import Marking from './details/marking';
import StepOne from './details/stepOne';
import useCustomHook from './details/hooks/markHook';


const First = ({ onQuantityChange }) => {  
  const [quantity, setQuantity] = React.useState(0);
  const [markingType, setMarkingType] = React.useState('')


  const handleCargoVolumeChange = (volumePrice) => {
    console.log('Цена за объем:', volumePrice);
  };
  const handleQuantityChange = (newQuantityObject) => {
    const newQuantity = newQuantityObject.quantity || 0;
    setQuantity(Number(newQuantity));
    onQuantityChange(newQuantityObject); 
  };
  const handleSizeChange = (sizeData) => {
    console.log('Объем:', sizeData);
  }
  const handleMarkingChange = (newMarkType) => {
    console.log('Тип маркировки:', );
    setMarkingType(newMarkType);
  };
  const calculatedValue = useCustomHook(quantity, markingType);

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
          Рассчитанное значение: {calculatedValue}
        </div>
    </div>
    
    
  );
};

export default First;
