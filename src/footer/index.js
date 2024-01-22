import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-[1208px] h-[140px] mx-auto justify-between'>
        <div className='flex mt-[60px]'>
            <div className='font-gothic font-normal text-[27.81px] leading-[1.512rem] tracking-[.261em]'>MARKET</div>
            <div className='font-macan font-normal text-[27.81px] leading-[1.375rem] tracking-[.261em]'>LlNK</div>
        </div>
        <div className='flex mt-[63.35px]'>
            <div className='flex'>
                <div className='font-fira font-normal text-[13.475px] leading-[0.842rem] text-[#8A8A8A]'>Телефон</div>
                <div className='font-sfpro font-normal text-[13.475px] leading-[0.7rem] tracking-[.034em] text-[#4F4F4F] ml-[13.47px]'>+7 980 463 41 83</div>
            </div>
            <div className='flex ml-[24.42px]'>
                <div className='font-fira font-normal text-[13.475px] leading-[0.842rem] text-[#8A8A8A]'>Адрес</div>
                <div className='font-sfpro font-normal text-[13.475px] leading-[0.7rem] tracking-[.034em] text-[#4F4F4F] ml-[13.47px]'>8 км, МКАД 3, к1</div>
            </div>
        </div>
    </div>
  )
};

export default Footer;