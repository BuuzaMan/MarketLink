import React from 'react'
import Discount from './details/discount';
import Application from './details/application';

const Individual = () => {
  return (
    <div className='flex flex-col font-sfpro items-center'>
        <div className='desktop:w-[950px] mobile:w-[346px] desktop:h-[128px] mobile:h-[160px] text-center font-medium desktop:text-[64px] mobile:text-[40px] desktop:leading-[3rem] mobile:leading-[2.3rem] desktop:-tracking-[.03em] mobile:-tracking-[.02em]'>Рассчитать поставку по индивидуальным условиям</div>
        <div className='flex desktop:flex-row mobile:flex-col desktop:w-[1208px] mobile:w-[346px] desktop:h-[567px] mobile:h-[700px] desktop:gap-x-6 mobile:gap-y-5'>
          <Discount />
          <Application />
        </div>
    </div>
  )
};

export default Individual;
