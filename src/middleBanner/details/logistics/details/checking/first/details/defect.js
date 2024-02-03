import React from 'react'
import Checkbox from '../../../../../../../svg/checkbox';

const Defect = () => {
  return (
    <div className='desktop:w-[259px] mobile:w-[271px] desktop:h-[140px] mobile:h-[140px] rounded-[10px] shadow-[0px_3px_6.7px_0px_rgba(7,22,61,0.12)]'>
        <div className='mt-[14px] ml-[22px]'><Checkbox /></div>
        <div className='mt-[16px] ml-[22px] w-[174px] font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>Детально проверим на брак по вашему техзаданию.</div>
    </div>
  )
}

export default Defect;