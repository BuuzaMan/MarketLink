import React from 'react';
import StepTwo from './details/stepTwo';
import QualityControl from './details/qualityControl';
import Package from './details/package';
import Attachment from './details/attachments/index';
import Tag from './details/tag';
import useQualityPrice from './details/hooks/qualityPrice';
import useAttachmentCost from './details/hooks/attachmentCost';
import useTagPrice from './details/hooks/tagPrice';
import useBubbleWrapCost from './details/hooks/packageCost/BubbleWrap';
import useZipPackageCost from './details/hooks/packageCost/zipPack';
import useSealedPackCost from './details/hooks/packageCost/sealedPack';
import useBoppCost from './details/hooks/packageCost/boppPack';


const Second = ({ 
  quantity, 
  sizeData,
  onBoppPackCostChange,
  onBubbleWrapCostChange,
  onSealedPackCostChange,
  onZipPackCostChange,
  onAttachCostChange,
  onTagPriceChange,
  onQualityCostChange
 }) => {
  //Установка состояния проверки на брак
  const [qualityControlOption, setQualityControlOption] = React.useState('');
  //Установка состояния вложения
  const [selectedOption, setSelectedOption] = React.useState('');
  //Установка состояния бирки
  const [tagAttached, setTagAttached] = React.useState('');
  //Установка состояния выбранной упаковки
  const [selectedPackage, setSelectedPackage] = React.useState('');
  //Установка состояния выбранного размера воздушно-пузырчатой пленки
  const [selectedSize, setSelectedSize] = React.useState('');

  //выбор вложения
  const handleAttachmentSelect = (option) => {
    setSelectedOption(option);
  };
  //цена за вложение
  const attachmentCost = useAttachmentCost(quantity, selectedOption);
  onAttachCostChange(attachmentCost)
   
  //выбор бирки
  const handleTagAttachedChange = (value) => {
    setTagAttached(value);
  };
  //цена за бирку
  const tagPrice = useTagPrice(quantity, tagAttached);
  onTagPriceChange(tagPrice)

  //Выбор проверки на брак
  const handleQualityControlChange = (option) => {
    setQualityControlOption(option);
  };
   //цена за проверку на брак
   const qualityCost = useQualityPrice(quantity, qualityControlOption);
   onQualityCostChange(qualityCost)

  

  //выбор упаковки и размера у воздушно-пузырчатой пленки
  const handlePackageSelect = ({ packageType, size }) => {
    setSelectedPackage(packageType);
    setSelectedSize(size);
  };
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  //цена за воздушно-пузырчатую пленку
  const bubbleWrapCost = useBubbleWrapCost(sizeData, quantity, selectedPackage);
  onBubbleWrapCostChange(bubbleWrapCost);
  //цена за зип-пакет
  const zipPackageCost = useZipPackageCost(selectedSize, quantity, selectedPackage);
  onZipPackCostChange(zipPackageCost);
  //цена за запаянный рукав
  const sealedPackageCost = useSealedPackCost(sizeData, quantity, selectedPackage);
  onSealedPackCostChange(sealedPackageCost);
  //цена за бопп-пакет
  const boppPackCost = useBoppCost(selectedPackage, quantity)
  onBoppPackCostChange(boppPackCost);

  const handleReset = () => {
    setSelectedOption('');
    setTagAttached('');
  };


  return (
    <div className='flex flex-col mt-[17px] ml-[28px]'>
        <StepTwo />
        <QualityControl onControlChange={handleQualityControlChange} />
        <Package onPackageSelect={handlePackageSelect} onSizeChange={handleSizeChange} onReset={handleReset}/>
        <Attachment onOptionSelect={handleAttachmentSelect}/>
        <Tag onTagAttachedChange={handleTagAttachedChange} />
    </div>
  );
};

export default Second;
