import React from 'react'
import Shiping from './details/shiping';
import Sending from './details/sending';
import Warehouse from './details/warehouse';

const Delivery = () => {
  return (
    <div className='flex flex-col desktop:w-[592px] mobile:w-[346px] desktop:h-[756px] mobile:h-[442px] desktop:rounded-2xl mobile:rounded-[9.351px] relative overflow-hidden z-40 bg-[#FFFFFF]'>
        <div className='flex flex-col desktop:mt-[31px] mobile:mt-[20px] desktop:ml-[37px] mobile:ml-[21.63px]'>
            <div className='desktop:w-[450px] mobile:w-[285px] desktop:h-[192px] mobile:h-[128px] font-sfpro font-medium desktop:text-[48px] mobile:text-[32px] desktop:leading-[3rem] mobile:leading-[2rem] desktop:-tracking-[.06em] mobile:-tracking-[.02em] z-40'>Ответственная доставка из Китая в Россию с гарантией качества и сроков.</div>
            <div className='flex  desktop:w-[337px] mobile:w-[197px] desktop:h-[56px] mobile:h-[33px] desktop:rounded-[32px] mobile:rounded-[18.703px] bg-gradient-to-r from-[#EB1988] to-[#005AF9] items-center justify-center font-sfpro font-bold desktop:text-[24px] mobile:text-[14.027px] desktop:leading-[1.95rem] mobile:leading-[1.3rem] desktop:-tracking-[.03em] mobile:-tracking-[.02em] text-white desktop:mt-[40px] mobile:mt-[12.08px] z-40'>Грузы от 1кг до 100 тонн.</div>
            <div className='flex flex-col desktop:mt-[192px] mobile:mt-[1px] desktop:gap-y-[16px] mobile:gap-y-[9.53px] z-40'>
                <Shiping />
                <Sending />
                <Warehouse />
            </div>
        </div>
        <div className='absolute w-[1802px] h-[815px] -top-[300px] -left-[600px] z-0 brightness-[1.30] saturate-100'><img src='images/sky.png' alt='sky' /></div>
        <div className='absolute w-[1257px] h-[676px] z-0 top-[275px]'><img src='images/containers.png' alt='cargo' /></div>
    </div>
  )
};

export default Delivery;
