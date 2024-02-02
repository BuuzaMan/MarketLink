import React from 'react'
import Mlbox from '../../../../svg/mlbox';

const Package = () => {
  return (
    <div className='flex flex-col relative overflow-hidden desktop:w-[284px] mobile:w-[346px] desktop:h-[340px] mobile:h-[392.6px] desktop:rounded-2xl mobile:rounded-[19.156px] bg-[#FFFFFF]'>
        <div className='font-sfpro font-medium desktop:text-[40px] mobile:text-[32px] desktop:leading-[2.3rem] mobile:leading-[1rem] -tracking-[.02em] desktop:mt-[23px] desktop:ml-[26px] mobile:mt-[27.03px] mobile:ml-[31.45px] desktop:w-[165px] mobile:w-[268px] desktop:h-[80px] mobile:h-[32px]'>Упаковка под ключ</div>
        <div className='flex'>
            <div className='flex flex-col w-[150px] ml-[30px]'>
                <div className='flex desktop:mt-[131px] mobile:mt-[240px]'>
                    <div className='font-sfpro font-normal desktop:text-[19.703px] mobile:text-[23.5px] desktop:leading-[1.3rem] mobile:leading-[1.3rem] tracking-[.04em]'>От&nbsp;</div>
                    <div className='font-sfpro font-bold desktop:text-[40px] mobile:text-[40px] leading-[1rem] -tracking-[.02em]'>19₽</div>
                </div>
                <div className='font-sfpro font-normal desktop:text-[19.703px] mobile:text-[23.589px] text-[#828282] leading-[1.3rem] tracking-[.04em]'>за единицу</div>
            </div>
            <div className='flex absolute desktop:w-[114px] desktop:h-[115px] mobile:w-[128px] mobile:h-[129px] desktop:mt-[52px] mobile:mt-[166px] desktop:ml-[190px] mobile:ml-[187px]'><Mlbox /></div>
        </div>
    </div>
  )
}

export default Package;