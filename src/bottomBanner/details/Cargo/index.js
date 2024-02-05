import React from 'react'
import Delivery from './details/delivery/index.js';
import DeliveryCalc from './details/deliveryCalc/index.js';

const Cargo = () => {
  return (
    <div className='flex flex-col desktop:w-[1208px] mobile:w-[386px] mobile:h-[1023px] items-center desktop:mt-[120px] mobile:mt-[80px]'>
        <div className='flex flex-col font-sfpro desktop:w-[1110px] mobile:w-[346px] font-medium desktop:text-[64px] mobile:text-[40px] desktop:leading-[3rem] mobile:leading-[2rem] desktop:-tracking-[.03em] text-center'>
            <div>Карго доставка</div>
            <div className='desktop:mt-[18px]'>из Китая в Москву</div>
        </div>
        <div className='flex desktop:flex-row mobile:flex-col desktop:w-[1208px] mobile:w-[386px] desktop:h-[756px] mobile:h-[905px] desktop:mt-[40px] mobile:mt-[40px] desktop:gap-x-6 mobile:gap-y-5 mobile:items-center'>
            <Delivery />
            <DeliveryCalc />
        </div>
    </div>
  )
};

export default Cargo;
