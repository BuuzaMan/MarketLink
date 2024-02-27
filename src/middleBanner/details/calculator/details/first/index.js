import React, { useState } from 'react'
import Quantity from './details/quantity';
import Size from './details/size';
import PickUp from './details/pickup';
import CargoVolume from './details/cargoVolume';
import Marking from './details/marking';
import StepOne from './details/stepOne';
import useMarkHook from './details/hooks/markHook';

const First = ({ 
  onQuantityChange, 
  onSizeChange, 
  onVolumePriceChange, 
  onCalculatedValueChange }) => { 
  //Задаем состояние количества товара 
  const [quantity, setQuantity] = React.useState(0);
  //Задаем состояние маркировки
  const [markingType, setMarkingType] = React.useState('')
  //Задаем состояние размеров(длина, ширина, высота)
  const [sizeData, setSizeData] = React.useState({ length: '', width: '', height: '' });
  const [isMarked, setIsMarked] = useState('')

  //Цена за объем груза
  const handleCargoVolumeChange = (volumePrice) => {
    onVolumePriceChange(volumePrice);
  };
  //Задаем значение количества товара
  const handleQuantityChange = (newQuantityObject) => {
    const newQuantity = newQuantityObject.quantity || 0;
    setQuantity(Number(newQuantity));
    onQuantityChange(newQuantityObject); 
  };
  //Задаем значения высоты ширины и длины
  const handleSizeChange = (newSizeData) => {
    setSizeData(newSizeData);
    onSizeChange(newSizeData)
  }
  //Задаем значение типа маркировки
  const handleMarkingChange = (newMarkType) => {
    setMarkingType(newMarkType);
    console.log(newMarkType)
  };
  const handleMarkChoose = (newIsMarked) => {
    setIsMarked(newIsMarked)
  }
  //Расчитываем стоимость от типа маркировки
  const calculatedValue = useMarkHook(quantity, markingType, isMarked);
  onCalculatedValueChange(calculatedValue);

  return (
    <div className='flex flex-col mt-[17px] ml-[35px] w-[336px] h-[419px]'>
        <StepOne />
        <div className='flex flex-row w-[236px] h-[68px] gap-x-2 mt-[18px]'>
            <Quantity onQuantityChange={handleQuantityChange}/>  
            <Size onSizeChange={handleSizeChange}/>
        </div>
        <PickUp />
        <CargoVolume onCargoVolumeChange={handleCargoVolumeChange}/>
        <Marking onMarkingChange={handleMarkingChange} onMarkChoose={handleMarkChoose}/>
        <div>{isMarked}</div>
    </div>
    
    
  );
};

export default First;