import React from 'react'
import Quantity from './details/quantity';
import Size from './details/size';
import PickUp from './details/pickup';
import CargoVolume from './details/cargoVolume';
import Marking from './details/marking';
import StepOne from './details/stepOne';
import useCustomHook from './details/hooks/markHook';
import useVolumeCalculation from './details/hooks/volumeHook';


const First = ({ onQuantityChange, onSizeChange }) => {  
  const [quantity, setQuantity] = React.useState(0);
  const [markingType, setMarkingType] = React.useState('')
  const [sizeData, setSizeData] = React.useState({ length: '', width: '', height: '' });


  const handleCargoVolumeChange = (volumePrice) => {
    console.log('Цена за объем:', volumePrice);
  };
  const handleQuantityChange = (newQuantityObject) => {
    const newQuantity = newQuantityObject.quantity || 0;
    setQuantity(Number(newQuantity));
    onQuantityChange(newQuantityObject); 
  };
  const handleSizeChange = (newSizeData) => {
    setSizeData(newSizeData);
    onSizeChange(newSizeData)
  };
  const calculatedVolume = useVolumeCalculation(sizeData);


  const handleMarkingChange = (newMarkType) => {
    console.log('Тип маркировки:', newMarkType );
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
        <div>Цена за маркировку: {calculatedValue}</div>
        <div>Объем товара: {calculatedVolume}</div>
    </div>
    
    
  );
};

export default First;
