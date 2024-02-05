import React from 'react'
import Check from '../../../../../../svg/check';


const Sending = () => {
  return (
    <div className='flex desktop:w-[515px] mobile:w-[300px] desktop:h-[72px] mobile:h-[36px] shadow-[0_3px_6.7px_0px_rgba(7,22,61,0.05);] border-[1px] border-[#F0F0F0] desktop:rounded-[10px] mobile:rounded-[5.845px] bg-white'>
        <div className='desktop:mt-[20px] mobile:mt-[11.69px] desktop:ml-[22.56px] mobile:ml-[13.19px] desktop:w-[24px] mobile:w-[14px]'><Check /></div>
        <div className='flex desktop:ml-[17px] mobile:ml-[9.94px] desktop:mt-[21.5px] mobile:mt-[10px] desktop:w-[456px] mobile:w-[267px] desktop:h-[21px] mobile:h-[12px] font-sfpro'>
            <div className='font-bold desktop:text-[16px] mobile:text-[9.351px] leading-[1rem] tracking-[.04em]'>Отправляем&nbsp;</div>
            <div className='font-normal desktop:text-[16px] mobile:text-[9.351px] leading-[1rem] tracking-[.04em]'>ТК по РФ, РБ, КЗ или отгрузка самовывозом.</div>
        </div>
    </div>
  )
}

export default Sending;