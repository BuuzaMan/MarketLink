import React from 'react'
import Machine from '../../../../../svg/machine';

const First = () => {
  return (
    <div className='flex flex-col rounded-xl bg-white w-[265px] h-[252px] shadow-[0px_2.161px_127.704px_0px_rgba(7,22,61,0.12)]'>
        <div className='ml-[23px] mt-[23px]'><Machine /></div>
        <div className='w-[120px] h-[38px] mt-[25px] ml-[23px] font-sfpro font-bold text-[18.692px] leading-[1.168rem]'>Поставляем без задержек</div>
        <div className='w-[200px] h-[90px] mt-[8px] ml-[23px] font-sfpro font-normal text-[14px] text-[#4F4F4F] leading-[1.138rem]'>Мы знаем, насколько для вас важны сроки поставок и поэтому забираем товар с СЦ день в день и отвозим на маркетплейсы ежедневно.</div>
    </div>
  )
}

export default First;