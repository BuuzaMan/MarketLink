import React from 'react'
import Delivery from './details/delivery';
import DeliveryCalc from './details/deliveryCalc';

const Cargo = () => {
  return (
    <div className='flex flex-col w-[1208px] items-center' id="cargo">
        <div className='flex flex-col font-sfpro w-[1110px] font-medium text-[64px] leading-[3rem] -tracking-[.03em] text-center mt-[120px]'>
            <div>Карго доставка</div>
            <div className='mt-[18px]'>из Китая в Москву</div>
        </div>
        <div className='flex w-[1208px] h-[756px] mt-[40px] gap-x-6'>
            <Delivery />
            <DeliveryCalc />
        </div>
    </div>
  )
};

export default Cargo;
