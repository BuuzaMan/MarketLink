import React from 'react'
import Shield from '../../../../../svg/shield';

const Third = () => {
  return (
    <div className='flex flex-col rounded-xl bg-white w-[265px] h-[252px] shadow-[0px_2.161px_127.704px_0px_rgba(7,22,61,0.12)]'>
        <div className='ml-[23px] mt-[23px]'><Shield /></div>
        <div className='w-[200px] h-[38px] mt-[25px] ml-[23px] font-sfpro font-bold text-[18.692px] leading-[1.168rem]'>Минимизируем процент возвратов</div>
        <div className='w-[220px] h-[90px] mt-[8px] ml-[23px] font-sfpro font-normal text-[14px] text-[#4F4F4F] leading-[1.138rem]'>Работаем по четкому алгоритму. Недосчитали или недовезли - не наш случай.</div>
    </div>
  )
}

export default Third;