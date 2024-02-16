import React from 'react'
import StepTwo from './details/stepTwo';
import QualityControl from './details/qualityControl';
import Package from './details/package';
import Attachment from './details/attachments/index';
import Tag from './details/tag';
import useQualityPrice from './details/hooks/qualityPrice';
import useAttachmentCost from './details/hooks/attachmentCost';
import useTagPrice from './details/hooks/tagPrice';

const Second = ({ quantity }) => {
  const { price: updatedPrice, updateControlType } = useQualityPrice(quantity);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [tagAttached, setTagAttached] = React.useState('');

  const handleAttachmentSelect = (option) => {
    setSelectedOption(option);
    console.log(option);
  };
  const attachmentCost = useAttachmentCost(quantity, selectedOption);
  
  const handleTagAttachedChange = (value) => {
    setTagAttached(value);
  };
  const tagPrice = useTagPrice(quantity, tagAttached);


  return (
    <div className='flex flex-col mt-[17px] ml-[28px]'>
        <StepTwo />
        <QualityControl onControlChange={updateControlType} />
        <Package />
        <Attachment onOptionSelect={handleAttachmentSelect}/>
        <Tag onTagAttachedChange={handleTagAttachedChange} />
        <div>Цена за проверку на брак: {updatedPrice}</div>
        <div>Стоимость вложения: {attachmentCost}</div>
        <div>Стоимость бирки: {tagPrice}</div>
    </div>
  )
};

export default Second;
