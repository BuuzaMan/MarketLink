import React from 'react'
import Volume from './volume';

const Information = () => {
  return (
    <div className='flex flex-col desktop:w-[516px] desktop:h-[135px] desktop:mt-[19px]'>
        <div className='deskotp:w-[274px] desktop:h-[24px] font-sfpro font-bold text-[24px] leading-[1rem] -tracking-[.02em]'>Информация о грузе</div>
        <div className='flex flex-row font-sfpro desktop:gap-x-[12.23px] desktop:mt-[19px]'>
            <div className='desktop:w-[249px] desktop:h-[92px]'>
                <div className='desktop:w-[236px] desktop:h-[18px] font-normal text-[18.427px] leading-[1rem] tracking-[.04em] justify-center'>Общий объём, м³</div>
                <div className='z-40 desktop:mt-[10px]'><Volume /></div>
            </div>
            <div className='desktop:w-[249px] desktop:h-[92px]'>
                <div className='desktop:w-[236px] desktop:h-[18px] font-normal text-[18.427px] leading-[1rem] tracking-[.04em] justify-center'>Общий вес, кг</div>
                <div className='desktop:mt-[10px] z-40'><Volume /></div>
            </div>
        </div>
    </div>
  )
}

export default Information;