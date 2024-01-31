import React from 'react'
import Organization from './details/organization';
import PersonalManager from './details/personalManager';
import People from './details/people';

const FullFilment = () => {
  return (
    <div className='flex flex-col container desktop:w-[1208px] mobile:w-[386px] desktop:mt-[130px] mobile:mt-[80px] mx-auto items-center'>
        <div className='flex flex-col text-center items-center desktop:w-[1208px] mobile:w-[386px] desktop:space-y-[8px]'>
            <div className='font-sfpro font-bold text-[24px] leading-[1.95rem] -tracking-[.03em] w-[254px] h-[31px]' style={{ backgroundImage: 'linear-gradient(92deg, #EB1988 4.78%, #005AF9 100%)', backgroundClip: 'text', color: 'transparent' }}>Мы сделаем все за вас</div>
            <div className='font-sfpro font-medium desktop:w-[899px] desktop:h-[64px] mobile:w-[346px] mobile:h-[80px] desktop:text-[64px] mobile:text-[40px] desktop:leading-[4rem] mobile:leading-[2.5rem] desktop:w-[899px] mobile:w-[346px] desktop:h-[64px] mobile:h-[80px] desktop:-tracking-[.03em] mobile:-tracking-[.05em]'>Фулфилмент без головной боли</div>
        </div>
        <div className='flex flex-col desktop:w-[1208px] mobile:w-[386px] desktop:h-[1183px] mobile:h-[1705px] desktop:mt-[40px] mobile:mt-[30px]'>
            <div className='flex desktop:flex-row mobile:flex-col'>
                <Organization />
                <PersonalManager />
            </div>
            <People />
        </div>
    </div>
  )
};

export default FullFilment;
