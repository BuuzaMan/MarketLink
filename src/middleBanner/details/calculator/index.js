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
  const [sizeData, setSizeData] = useState(0);
  const [volumeCost, setVolumeCost] = useState(0);
  const [markPrice, setMarkPrice] = useState(0);
  const [bubbleCost, setBubbleCost] = useState(0);
  const [zipPackCost, setZipPackCost] = useState(0);
  const [sealedPackCost, setSealedPackCost] = useState(0);
  const [boppPackageCost, setBoppPackageCost] = useState(0);
  const [attachCost, setAttachCost] = useState(0);
  const [tagCost, setTagCost] = useState(0);
  const [qualityPrice, setQualityPrice] = useState(0);
  const [totalDeliveryPrice, setDeliveryPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPackCost, setTotalPackCost] = useState(0);
 

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
  const handleTotalChange = (total) => {
    setDeliveryPrice(total)
  };
  //вычисляем общую стоимость упаковки
  useEffect(() => {setTotalPackCost(boppPackageCost + bubbleCost + sealedPackCost + zipPackCost)},[boppPackageCost, bubbleCost, sealedPackCost, zipPackCost])
  //вычисляем общую стоимость услуг
  useEffect(()=> {setTotalPrice(volumeCost + markPrice + totalPackCost + attachCost + tagCost + qualityPrice + totalDeliveryPrice)},[volumeCost, markPrice, totalPackCost, attachCost,tagCost,qualityPrice,totalDeliveryPrice])

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
              onTotalChange={handleTotalChange}
            />
          </div>
          <div className='flex flex-row z-40 mt-[10px]'>
            <div className='flex font-sfpro mt-[12px] ml-[35px] w-[304px]'>
              <div className='text-[40px] font-normal leading-[5.2rem]'>от&nbsp;</div>
              <div className='text-[64px] font-bold leading-[4rem]'>{totalPrice}₽</div>
            </div>
            <div className='w-[157px] h-[52px] ml-[27px] font-sfpro text-[17.438px] font-medium leading-[1.625rem] text-left mt-[18px] z-40'>Примерная стоимость без НДС</div>
            <div className='mt-[20px] ml-[390px] z-40'><Button /></div>
          </div>
          <div className='flex absolute z-0 top-[207px] left-[173px] blur-[800px]'><BigBlueEl /></div>
          <div className='flex absolute z-20 top-[200px] left-[200px] blur-[300px]'><PinkBig /></div>
        </div>
    </div>
  )
};

export default Calculator;
