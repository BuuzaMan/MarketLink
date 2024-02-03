import React from 'react'
import DeliveryCar from '../../../../../../svg/deliveryCar';

const Delivery = () => {
  return (
    <div className='flex flex-col desktop:w-[284px] mobile:w-[284px] desktop:h-[473px] mobile:h-[473px] rounded-[12.84px] bg-[#FFFFFF]'>
        <DeliveryCar />
        <div className='mt-[24px] ml-[32px] font-sfpro mr-[32px]'>
            <div className='w-[180px] h-[48px] font-bold text-[24px] leading-[1.5rem] -tracking-[.03em]'>Доставка на маркетплейсы</div>
            <div className='w-[220px] h-[210px] mt-[16px] font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>
                <div>Запланируем и организуем поставку или отвезем в назначенный вами день.</div>
                <div className='mt-[20px]'>Ежедневная отправка на маркетплейсы по системам FBO и FBS.</div>
            </div>
        </div>
    </div>
  )
}

export default Delivery;