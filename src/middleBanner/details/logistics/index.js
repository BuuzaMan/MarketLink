import React from 'react'
import Service from './details/service';
import Checking from './details/checking';
import Work from './details/Work';

let Logistics = () => {
  return (
    <div className='flex flex-col w-[1208px] items-center mt-[120px]'>
        <div className='font-sfpro font-bold text-[24px] leading-[1.95rem] -tracking-[.03em]' style={{ backgroundImage: 'linear-gradient(92deg, #EB1988 4.78%, #005AF9 100%)', backgroundClip: 'text', color: 'transparent' }}>25 видов услуг в одном окне</div>
        <div className='font-sfpro font-medium text-[64px] leading-[4rem] -tracking-[.08] w-[736px] h-[128px] text-center mt-[12px]'>Ваш собственный отдел логистики в Москве</div>
        <Service />
        <Checking />
        <Work />
    </div>
  )
};

export default Logistics;
