import React from 'react'
import PinkCircle from '../../../../svg/pinkCircle';
import BlueCircle from '../../../../svg/blueCircle';
import YellowCircle from '../../../../svg/YellowCircle';

const Organization = () => {
  return (
    <div className='flex flex-col relative overflow-hidden desktop:w-[695px] mobile:w-[346px] desktop:h-[652px] mobile:h-[527px] bg-[#FFFFFF] desktop:rounded-2xl mobile:rounded-[8px]'>
        <div className='font-sfpro font-medium desktop:text-[48px] mobile:text-[32px] desktop:leading-[3rem] mobile:leading-[2rem] desktop:-tracking-[.06em] mobile:-tracking-[.04em] desktop:w-[612px] mobile:w-[290px] desktop:h-[192px] mobile:h-[192px] desktop:mt-[38px] mobile:mt-[21px] desktop:ml-[46px] mobile:ml-[23px]'>Организация поставки и забота о качественной приемке и упаковке товара съедает много времени</div>
        <div className='font-sfpro font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] desktop:mt-[24px] desktop:ml-[52px] mobile:mt-[12px] mobile:ml-[23px] desktop:w-[571px] desktop:h-[21px] mobile:w-[293px] mobile:h-[42px]'>Вам больше не придется переживать и отвлекаться по мелочам.</div>
        <div className='flex desktop:mt-[31.37px] mobile:mt-[50px] desktop:ml-[52px] mobile:ml-[25.79px] z-10'><img src='images/wts.png' alt='whatsup' className='desktop:w-[591px] mobile:w-[294px]'/></div>
        <div className='flex absolute top-[380px] left-[420px] blur-[150px] z-0'><PinkCircle /></div>
        <div className='flex absolute top-[300px] left-[480px] blur-[150px] z-0'><BlueCircle /></div>
        <div className='flex absolute top-[452px] -left-[150px] z-0 blur-[150px]'><YellowCircle /></div>
    </div>
  )
};

export default Organization;