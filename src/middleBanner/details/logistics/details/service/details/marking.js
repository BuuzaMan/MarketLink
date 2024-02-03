import React from 'react'
import Mark from '../../../../../../svg/mark'

const Marking = () => {
  return (
    <div className='flex flex-col desktop:w-[284px] mobile:w-[284px] desktop:h-[473px] mobile:h-[473px] rounded-[12.84px] bg-[#FFFFFF]'>
        <Mark />
        <div className='mt-[24px] ml-[32px] mr-[32px] font-sfpro'>
            <div className='w-[180px] h-[48px] font-bold text-[24px] leading-[1.5rem] -tracking-[.03em]'>Маркировка товара</div>
            <div className='w-[220px] h-[210px] mt-[16px] font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>
                <div>Распечатаем и расклеим кизы с вашим ШК.</div>
                <div className='mt-[20px]'>Одинарная и двойная маркировка.</div>
                <div className='mt-[20px]'>Работаем по системе "Честный знак".</div>
            </div>
        </div>
    </div>
  )
}

export default Marking