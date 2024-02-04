import React from 'react'
import Check from '../../../../../../svg/check';

const Sending = () => {
  return (
    <div className='flex w-[515px] h-[72px] shadow-[0_3px_6.7px_0px_rgba(7,22,61,0.05);] border-[1px] border-[#F0F0F0] rounded-[10px] bg-white'>
        <div className='mt-[20px] ml-[22.56px]'><Check /></div>
        <div className='flex ml-[17px] mt-[21.5px] h-[21px] w-[456px] font-sfpro'>
            <div className='font-bold text-[16px] leading-[1.3rem] tracking-[.04em]'>Отправляем&nbsp;</div>
            <div className='font-normal text-[16px] leading-[1.3rem] tracking-[.04em]'>ТК по РФ, РБ, КЗ или отгрузка самовывозом.</div>
        </div>
    </div>
  )
}

export default Sending;