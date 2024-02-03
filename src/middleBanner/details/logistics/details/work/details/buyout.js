import React from 'react'
import LoadBox from '../../../../../../svg/loadbox';

const Buyout = () => {
  return (
    <div className='w-[284px] h-[356px] rounded-[12.84px] bg-[#FFFFFF]'>
        <div className='mt-[31px] ml-[32px]'><LoadBox /></div>
        <div className='mt-[24px] ml-[32px] mr-[32px] font-sfpro'>
            <div className='text-[24px] font-bold leading-[1.5rem] -tracking-[.03em] w-[150px]'>Забор самовыкупов</div>
            <div className='font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] w-[220px]'>
                <div className='mt-[16px]'>Получим ваш товар на ПВЗ.</div>
                <div className='mt-[20px]'>Переклеим КИЗы и подготовим к новой поставке.</div>
            </div>
        </div>
    </div>
  )
}

export default Buyout;