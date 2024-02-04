import React from 'react'
import Select from './select'

const CostType = () => {
  return (
    <div className='flex flex-row font-sfpro desktop:w-[516px] desktop:h-[93px] desktop:mt-[19px] gap-x-[18px]'>
        <div className='flex flex-col desktop:w-[249px] desktop:h-[93px]'>
            <div className='desktop:w-[240px] desktop:h-[16px] font-normal text-[16px] leading-[1rem] tracking-[.04em] z-40'>Оценочная стоимость груза, $</div>
            <input
                type='text'
                placeholder='0.01'
                className='desktop:w-[249px] desktop:h-[64px] z-40 desktop:rounded-[12.173px] outline-none placeholder:pl-[20.26px] placeholder:pt-[23px] placehodler:text-[#898989] desktop:mt-[13px]'
                >
            </input>
        </div>
        <div className='z-40 desktop:w-[245px] desktop:h-[93px]'>
            <div className='desktop:w-[76px] desktop:h-[16px] font-normal text-[16px] leading-[1rem] tracking-[.04em]'>Вид груза</div>
            <div className='desktop:mt-[13px]'><Select /></div>
        </div>
    </div>
  )
}

export default CostType