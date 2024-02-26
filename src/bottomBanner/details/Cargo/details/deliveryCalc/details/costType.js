import React from 'react'
import Select from './select'

const CostType = () => {
  return (
    <div className='flex flex-row font-sfpro desktop:w-[516px] mobile:w-[300px] desktop:h-[93px] mobile:h-[61px] desktop:mt-[19px] mobile:mt-[10px] desktop:gap-x-[18px] mobile:gap-x-[10.52px]'>
        <div className='flex flex-col desktop:w-[249px] mobile:w-[146px] desktop:h-[93px] mobile:h-[61px]'>
            <div className='desktop:w-[240px] mobile:w-[146px] desktop:h-[16px] mobile:h-[13px] font-normal desktop:text-[16px] mobile:text-[10px] leading-[1rem] tracking-[.04em] z-40'>Оценочная стоимость груза, $</div>
            <input
                type='text'
                placeholder='0.01'
                className='desktop:w-[249px] mobile:w-[146px] desktop:h-[64px] mobile:h-[37.4px] z-40 desktop:rounded-[12.173px] mobile:rounded-[7.115px] outline-none placeholder:desktop:pl-[20.26px] placeholder:mobile:pl-0 placeholder:desktop:pt-[23px] placeholder:mobile:pt-[10px] placeholder:desktop:text-[16px] placeholder:mobile:text-[10px] placehodler:text-[#898989] desktop:mt-[13px] mobile:mt-[9.79px] mobile:pl-[11.84px]'
                >
            </input>
        </div>
        <div className='flex flex-col z-40 desktop:w-[245px] mobile:w-[144px] desktop:h-[93px] mobile:h-[61px]'>
            <div className='flex desktop:w-[76px] mobile:w-[60px] desktop:h-[16px] mobile:h-[13px] font-normal desktop:text-[16px] mobile:text-[10px] leading-[1rem] tracking-[.04em]'>Вид груза</div>
            <div className='flex desktop:mt-[13px] mobile:mt-[9.79px]'><Select /></div>
        </div>
    </div>
  )
}

export default CostType