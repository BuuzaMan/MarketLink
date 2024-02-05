import React from 'react'
import Volume from './volume';

const Information = () => {
  return (
    <div className='flex flex-col desktop:w-[516px] mobile:w-[299px] mobile:w-[298px] mobile:h-[96px] desktop:h-[135px] desktop:mt-[10px] mobile:mt-[5px] z-40'>
        <div className='deskotp:w-[274px] desktop:h-[24px] font-sfpro font-bold desktop:text-[24px] mobile:text-[14px] leading-[1rem] -tracking-[.02em]'>Информация о грузе</div>
        <div className='flex flex-row font-sfpro desktop:gap-x-[12.23px] mobile:gap-x-[7.15px] desktop:mt-[19px] mobile:mt-[10px]'>
            <div className='desktop:w-[249px] mobile:w-[146px] desktop:h-[92px] mobile:h-[60px]'>
                <div className='desktop:w-[236px] mobile:w-[125px] desktop:h-[18px] mobile:h-[25px] font-normal desktop:text-[18.427px] mobile:text-[10px] leading-[1rem] tracking-[.04em] justify-center'>Общий объём, м³</div>
                <div className='z-40 desktop:mt-[10px] desktop:w-[249px] mobile:w-[146px]'><Volume /></div>
            </div>
            <div className='desktop:w-[249px] mobile:w-[146px] desktop:h-[92px] mobile:h-[60px]'>
                <div className='desktop:w-[236px] mobile:w-[110px] desktop:h-[18px] mobile:h-[25px] font-normal desktop:text-[18.427px] mobile:text-[10px] leading-[1rem] tracking-[.04em] justify-center'>Общий вес, кг</div>
                <div className='desktop:mt-[10px] z-40 desktop:w-[249px] mobile:w-[146px]'><Volume /></div>
            </div>
        </div>
    </div>
  )
}

export default Information;