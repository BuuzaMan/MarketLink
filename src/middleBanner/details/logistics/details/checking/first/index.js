import React from 'react'
import Defect from './details/defect';
import Repair from './details/repair';
import Care from './details/care';
import Mini from './details/mini';

const First = () => {
  return (
    <div className='flex flex-col desktop:w-[589px] desktop:h-[532px] mobile:w-[346px] mobile:h-[827px] rounded-2xl bg-[#FFFFFF] font-sfpro'>
        <div className='desktop:w-[440px] mobile:w-[280px] desktop:mt-[30px] mobile:mt-[30px] desktop:ml-[40px] mobile:ml-[40px] mobile: font-medium desktop:text-[48px] mobile:text-[40px] desktop:leading-[3rem] mobile:leading-[2.3rem] desktop:-tracking-[.06em] mobile:-tracking-[.02em]'>Внимательный пересчет и проверка на брак</div>
        <div className='grid desktop:grid-cols-2 mobile:grid-cols-1 w-[529px] mt-[20px] ml-[38px] desktop:gap-x-[11px] desktop:gap-y-[13px] mobile:gap-y-[10px]'>
            <Defect />
            <Repair />
            <Care />
            <Mini />
        </div>
    </div>
  )
}

export default First;