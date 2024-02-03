import React from 'react'
import GradientBox from '../../../../../../svg/gradientBox';

const Packing = () => {
  return (
    <div className='flex flex-col desktop:w-[284px] mobile:w-[284px] desktop:h-[473px] mobile:h-[473px] rounded-[12.84px] bg-[#FFFFFF]'>
        <div className='mt-[33px] ml-[32px]'><GradientBox /></div>
        <div className='mt-[24px] ml-[32px] mr-[32px] font-sfpro'>
            <div className='w-[180px] h-[48px] font-bold text-[24px] leading-[1.5rem] -tracking-[.03em]'>Упаковка и переупаковка</div>
            <div className='w-[220px] h-[210px] mt-[16px] font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>
                <div>Более 10 видов упаковки, подберем подходящую под ваш товар.</div>
                <div className='mt-[20px] font-bold underline' style={{ backgroundImage: 'linear-gradient(92deg, #EB1988 4.78%, #005AF9 100%)', backgroundClip: 'text', color: 'transparent'}}>Посмотреть варианты упаковки.</div>
                <div className='mt-[20px]'>Сотрудничаем с проверенными типографиями: распечатаем и упакуем ваши вложения.</div>
                <div className='mt-[20px]'>Вложим подарки, соберем комплекты</div>
            </div>
        </div>
     </div>
  )
}

export default Packing;