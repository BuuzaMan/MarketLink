import React from 'react'

const MainWriting = () => {
  return (
    <div className='flex flex-col text-center items-center desktop:w-[1208px] mobile:w-[386px] desktop:space-y-[8px]'>
        <div className='font-sfpro font-bold text-[24px] leading-[1.95rem] -tracking-[.03em] w-[254px] h-[31px]' style={{ backgroundImage: 'linear-gradient(92deg, #EB1988 4.78%, #005AF9 100%)', backgroundClip: 'text', color: 'transparent' }}>Мы сделаем все за вас</div>
        <div className='font-sfpro font-medium desktop:w-[899px] desktop:h-[64px] mobile:w-[346px] mobile:h-[80px] desktop:text-[64px] mobile:text-[40px] desktop:leading-[4rem] mobile:leading-[2.5rem] desktop:w-[899px] mobile:w-[346px] desktop:h-[64px] mobile:h-[80px] desktop:-tracking-[.03em] mobile:-tracking-[.05em]'>Фулфилмент без головной боли</div>
    </div>
  )
}

export default MainWriting;