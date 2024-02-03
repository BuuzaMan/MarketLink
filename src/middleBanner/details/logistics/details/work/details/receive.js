import React from 'react'
import GradientBox from '../../../../../../svg/gradientBox';

const Receive = () => {
  return (
    <div className='w-[284px] h-[356px] rounded-[12.84px] bg-[#FFFFFF]'>
        <div className='mt-[31px] ml-[32px]'><GradientBox /></div>
        <div className='mt-[24px] ml-[32px] mr-[32px] font-sfpro'>
            <div className='text-[24px] font-bold leading-[1.5rem] -tracking-[.03em]'>Прием и обработка возвратов</div>
            <div className='font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] w-[220px]'>
                <div className='mt-[16px]'>Заберем возвраты, проверим на брак, переупакуем и подготовим к продаже.</div>
                <div className='mt-[20px]'>Отправим на склад для следующей поставки.</div>
            </div>
        </div>
    </div>
  )
}

export default Receive;