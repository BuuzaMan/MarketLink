import React from 'react'
import Check from '../../../../../../svg/check';

const Shiping = () => {
  return (
    <div className='flex desktop:w-[515px] mobile:w-[300px] desktop:h-[72px] mobile:h-[42px] shadow-[0_3px_6.7px_0px_rgba(7,22,61,0.05);] border-[1px] border-[#F0F0F0] desktop:rounded-[10px] mobile:rounded-[5.845px] bg-white'>
        <div className='desktop:mt-[24.34px] mobile:mt-[14.22px] desktop:ml-[22.56px] mobile:ml-[13.19px] desktop:w-[24px] mobile:w-[14px]'><Check /></div>
        <div className='flex flex-wrap desktop:ml-[17px] mobile:ml-[9.94px] desktop:mt-[15px] mobile:mt-[5px] desktop:h-[42px] mobile:h-[20px] desktop:w-[350px] mobile:w-[301px] font-sfpro'>
            <div className='font-bold desktop:text-[16px] mobile:text-[9.351px] desktop:leading-[1.3rem] mobile:leading-[1rem] desktop:tracking-[.04em] mobile:tracking-[.04em]'>Доставка&nbsp;</div>
            <div className='font-normal desktop:text-[16px] mobile:text-[9.351px] desktop:leading-[1.3rem] mobile:leading-[1rem] desktop:tracking-[.04em] mobile:tracking-[.04em]'>от 10 дней, от 5 кг, от 1.8$.</div>
            <div className='font-normal desktop:text-[16px] mobile:text-[9.351px] desktop:leading-[1.3rem] mobile:leading-[0.5rem] desktop:tracking-[.04em] mobile:tracking-[.04em]'>Жд перевозки и автодоставка.</div>
        </div>
    </div>
  )
}

export default Shiping;