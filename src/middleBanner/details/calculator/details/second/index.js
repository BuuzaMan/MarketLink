import React from 'react'
import StepTwo from './details/stepTwo';
import QualityControl from './details/qualityControl';
import Package from './details/package';
import Attachment from './details/attachment';
import Tag from './details/tag';

const Second = () => {
  return (
    <div className='flex flex-col mt-[17px] ml-[28px]'>
        <StepTwo />
        <QualityControl />
        <Package />
        <Attachment />
        <Tag />
    </div>
  )
};

export default Second;
