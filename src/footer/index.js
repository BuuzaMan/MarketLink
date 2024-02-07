import React from 'react'
import Wtsp from '../svg/wtsp';
import Tlgrm from '../svg/tlgrm';

const Footer = () => {
  return (
    <div className='flex desktop:flex-row mobile:flex-col desktop:w-[1208px] desktop:h-[152px] mobile:w-[386px] mobile:h-[303px] desktop:mx-auto desktop:justify-between desktop:mt-0 mobile:mt-[80px] mobile:items-center'>
        <div className='flex desktop:hidden tablet:hidden mobile:flex flex-row gap-x-[14.52px]'>
            <Wtsp />
            <Tlgrm />
        </div>
        <div className='flex desktop:mt-0 mobile:mt-[80px]'>
            <div className='font-gothic font-normal text-[27.81px] leading-[1.512rem] tracking-[.261em]'>MARKET</div>
            <div className='font-macan font-normal text-[27.81px] leading-[1.375rem] tracking-[.261em]'>LlNK</div>
        </div>
        <div className='flex desktop:flex-row mobile:flex-col'>
            <div className='flex desktop:mt-0 mobile:mt-[23.7px]'>
                <div className='w-[56px] h-[13px] font-fira font-normal text-[13.475px] leading-[1rem] text-[#8A8A8A]'>Телефон</div>
                <div className='w-[144px] h-[18px] font-sfpro font-normal text-[13.475px] leading-[0.9rem] tracking-[.034em] text-[#4F4F4F] ml-[13.47px]'>+7 980 463 41 83</div>
            </div>
            <div className='flex desktop:ml-[24.42px] desktop:mt-0 mobile:mt-[26px] mobile:ml-[15px]'>
                <div className='font-fira font-normal text-[13.475px] leading-[1rem] text-[#8A8A8A]'>Адрес</div>
                <div className='font-sfpro font-normal text-[13.475px] leading-[0.9rem] tracking-[.034em] text-[#4F4F4F] ml-[13.47px]'>8 км, МКАД 3, к1</div>
            </div>
        </div>
    </div>
  )
};

export default Footer;