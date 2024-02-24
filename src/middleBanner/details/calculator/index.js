import React, { useEffect, useState } from 'react'
import First from './details/first/index';
import Second from './details/second/index';
import Third from './details/third/index';
import Button from '../button';
import BigBlueEl from '../../../svg/bigBlueEl';
import PinkBig from '../../../svg/pinkBig';




let Calculator = () => {
  //Создаем локальные состояния, передаваемые из дочерних компонентов
  const [quantity, setQuantity] = useState(0);
  const [sizeData, setSizeData] = useState(null);
  const [volumeCost, setVolumeCost] = useState('');
  const [markPrice, setMarkPrice] = useState('');
  const [bubbleCost, setBubbleCost] = useState('');
  const [zipPackCost, setZipPackCost] = useState('');
  const [sealedPackCost, setSealedPackCost] = useState('');
  const [boppPackageCost, setBoppPackageCost] = useState('');
  const [attachCost, setAttachCost] = useState('');
  const [tagCost, setTagCost] = useState('');
  const [qualityPrice, setQualityPrice] = useState('');
  const [newTotal, setNewTotal] = useState(0);




//Присваиваем состояния дочерних компонентов к локальному состоянию
  const handleQuantityChange = (newQuantityObject) => {
    const newQuantity = newQuantityObject.quantity || 0;
    setQuantity(Number(newQuantity));
  };
  const handleSizeChange = (newSizeData) => {
    setSizeData(newSizeData);
  };
  const handleVolumePriceChange = (volumePrice) => {
    setVolumeCost(volumePrice);
  };
  const handleCalculatedValueChange = (calculatedValue) => {
    setMarkPrice(calculatedValue);
  };
  const handleBubbleWrapCostChange = (bubbleWrapCost) => {
    setBubbleCost(bubbleWrapCost);
  };
  const handleZipPackCostChange = (zipPackageCost) => {
    setZipPackCost(zipPackageCost)
  };
  const handleSealedPackCostChange = (sealedPackageCost) => {
    setSealedPackCost(sealedPackageCost);
  };
  const handleBoppPackCostChange = (boppPackCost) => {
    setBoppPackageCost(boppPackCost);
  };
  const handleAttachCostChange = (attachmentCost) => {
    setAttachCost(attachmentCost);
  };
  const handleTagPriceChange = (tagPrice) => {
    setTagCost(tagPrice);
  };
  const handleQualityCostChange = (qualityCost) => {
    setQualityPrice(qualityCost);
  };
  const updateTotal = (total) => {
    setNewTotal(total);
  };
  

  return (
    <div className='flex container flex-col w-[1198px] mt-[120px] mx-auto items-center'>
        <div className='flex font-sfpro font-medium text-[64px] leading-[4rem]'>Рассчитать стоимость поставки</div>
        <div className='flex flex-col relative overflow-hidden items-start w-[1198px] h-[650px] rounded-2xl mt-[40px]'>
          <div className='flex flex-row rounded-xl bg-[#FEFEFE] w-[1145px] h-[500px] mt-[25px] ml-[27px] z-40 #FEFEFE'>
            <First 
              onQuantityChange={handleQuantityChange} 
              onSizeChange={handleSizeChange} 
              onVolumePriceChange={handleVolumePriceChange} 
              onCalculatedValueChange={handleCalculatedValueChange}
            />
            <Second 
              quantity={quantity}  
              sizeData={sizeData}
              onBubbleWrapCostChange={handleBubbleWrapCostChange}
              onZipPackCostChange={handleZipPackCostChange}
              onSealedPackCostChange={handleSealedPackCostChange}
              onBoppPackCostChange={handleBoppPackCostChange}
              onAttachCostChange={handleAttachCostChange}
              onTagPriceChange={handleTagPriceChange}
              onQualityCostChange={handleQualityCostChange}
            />
            <Third 
              sizeData={sizeData}
              onTotalChange={updateTotal}
            />
          </div>
          <div className='flex flex-row z-40 mt-[10px]'>
            <div className='flex font-sfpro mt-[18px] ml-[35px]'>
              <div className='text-[40px] font-normal leading-[5.6rem]'>от&nbsp;</div>
              <div className='text-[64px] font-bold leading-[4rem]'>44,990₽</div>
            </div>
            <div className='w-[157px] h-[52px] ml-[27px] font-sfpro text-[17.438px] font-medium leading-[1.625rem] text-left mt-[24px] z-40'>Примерная стоимость без НДС</div>
            <div className='mt-[20px] ml-[395px] z-40'><Button /></div>
          </div>
          <div className='flex absolute z-0 top-[207px] left-[173px] blur-[800px]'><BigBlueEl /></div>
          <div className='flex absolute z-20 top-[200px] left-[200px] blur-[300px]'><PinkBig /></div>
        </div>
    </div>
  )
};

export default Calculator;
