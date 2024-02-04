import React from 'react'
import Check from '../../../../../../svg/check';

const Warehouse = () => {
  return (
    <div className='flex w-[515px] h-[72px] shadow-[0_3px_6.7px_0px_rgba(7,22,61,0.05);] border-[1px] border-[#F0F0F0] rounded-[10px] bg-white'>
        <div className='mt-[20px] ml-[22.56px]'><Check /></div>
        <div className='flex ml-[17px] mt-[20px] h-[21.3px] w-[448px] font-sfpro'>
            <div className='font-bold text-[16px] leading-[1.3rem] tracking-[.04em]'>Свои склады и офисы&nbsp;</div>
            <div className='font-normal text-[16px] leading-[1.3rem] tracking-[.04em]'>в Москве, Иу, Гуанчжоу.</div>
        </div>
    </div>
  )
}

export default Warehouse;