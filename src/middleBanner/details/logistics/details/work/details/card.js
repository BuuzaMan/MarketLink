import React from 'react'
import Cards from '../../../../../../svg/cards'

const Card = () => {
  return (
    <div className='w-[284px] h-[356px] rounded-[12.84px] bg-[#FFFFFF]'>
        <div className='mt-[31px] ml-[32px]'><Cards /></div>
        <div className='mt-[24px] ml-[32px] mr-[32px] font-sfpro'>
            <div className='text-[24px] font-bold leading-[1.5rem] -tracking-[.03em] w-[220px]'>Оформление карточки товара</div>
            <div className='font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] w-[220px]'>
                <div className='mt-[16px]'>Оформим листинг и описание.</div>
                <div className='mt-[20px]'>Оптимизируем для повышения позиций карточки и роста конверсии в заказ.</div>
            </div>
        </div>
    </div>
  )
}

export default Card