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


const Second = ({ quantity, sizeData }) => {
  const { price: updatedPrice, updateControlType } = useQualityPrice(quantity);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [tagAttached, setTagAttached] = React.useState('');
  const [selectedPackage, setSelectedPackage] = React.useState('');
  const [selectedSize, setSelectedSize] = React.useState('');
  
  const handleAttachmentSelect = (option) => {
    setSelectedOption(option);
  };
  const attachmentCost = useAttachmentCost(quantity, selectedOption);
  console.log(attachmentCost)
  
  
  const handleTagAttachedChange = (value) => {
    setTagAttached(value);
  };
  const tagPrice = useTagPrice(quantity, tagAttached);
  console.log(tagPrice)


  const handlePackageSelect = ({ packageType, size }) => {
    setSelectedPackage(packageType);
    setSelectedSize(size);
  };
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  const bubbleWrapCost = useBubbleWrapCost(sizeData, quantity, selectedPackage);
  const zipPackageCost = useZipPackageCost(selectedSize, quantity,selectedPackage);
  const sealedPackageCost = useSealedPackCost(sizeData, quantity, selectedPackage);
  const boppPackCost = useBoppCost(selectedPackage, quantity)
  const handleReset = () => {
    setSelectedOption('');
    setTagAttached('');
  };


  return (
    <div className='flex flex-col mt-[17px] ml-[28px]'>
        <StepTwo />
        <QualityControl onControlChange={updateControlType} />
        <Package onPackageSelect={handlePackageSelect} onSizeChange={handleSizeChange} onReset={handleReset}/>
        <Attachment onOptionSelect={handleAttachmentSelect}/>
        <Tag onTagAttachedChange={handleTagAttachedChange} />
        <div>Брак {updatedPrice}</div>
        <div>Пупырка: {bubbleWrapCost}</div>
        <div>Стоимость ЗИП-пакета:{zipPackageCost}</div>
        <div>Рукав: {sealedPackageCost}</div>
        <div>БОПП: {boppPackCost}</div>
    </div>
  );
};

export default Second;
