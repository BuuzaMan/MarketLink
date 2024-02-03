import React from 'react'
import Service from './details/service';
import Checking from './details/checking';
import Work from './details/work';

let Logistics = () => {
  return (
    <div className='flex flex-col desktop:w-[1208px] mobile:w-[386px] items-center desktop:mt-[120px] mobile:mt-[80px]'>
        <div className='font-sfpro font-bold text-[24px] leading-[1.6rem] -tracking-[.03em]' style={{ backgroundImage: 'linear-gradient(92deg, #EB1988 4.78%, #005AF9 100%)', backgroundClip: 'text', color: 'transparent' }}>25 видов услуг в одном окне</div>
        <div className='font-sfpro font-medium desktop:text-[64px] mobile:text-[40px] desktop:leading-[4rem] mobile:leading-[2.5rem] desktop:-tracking-[.08] desktop:w-[736px] mobile:w-[316px] desktop:h-[128px] mobile:h-[120px] text-center mt-[12px]'>Ваш собственный отдел логистики в Москве</div>
        <Service />
        <Checking />
        <Work />
    </div>
  )
};

export default Logistics;
