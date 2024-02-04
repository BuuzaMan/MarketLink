import React from 'react'
import Check from '../../../../../../svg/check';

const Shiping = () => {
  return (
    <div className='flex desktop:w-[515px] mobile:w-[300px] desktop:h-[72px] mobile:h-[42px] shadow-[0_3px_6.7px_0px_rgba(7,22,61,0.05);] border-[1px] border-[#F0F0F0] desktop:rounded-[10px] mobile:rounded-[9.351px] bg-white'>
        <div className='mt-[24.34px] ml-[22.56px]'><Check /></div>
        <div className='flex flex-wrap ml-[17px] mt-[15px] h-[42px] w-[350px] font-sfpro'>
            <div className='font-bold text-[16px] leading-[1.3rem] tracking-[.04em]'>Доставка&nbsp;</div>
            <div className='font-normal text-[16px] leading-[1.3rem] tracking-[.04em]'>от 10 дней, от 5 кг, от 1.8$.</div>
            <div className='font-normal text-[16px] leading-[1.3rem] tracking-[.04em]'>Жд перевозки и автодоставка.</div>
        </div>
    </div>
  )
}

export default Shiping;