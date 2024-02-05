import React from 'react'

const Estimated = () => {
  return (
    <div className='desktop:w-[241px] mobile:w-[290px] desktop:h-[93px] mobile:h-[61px] desktop:mt-[23px] mobile:mt-[18px] z-40'>
        <div className='font-sfpro font-bold desktop:text-[24px] mobile:text-[14px] leading-[1.3rem] desktop:-tracking-[.02em]'>Примерная стоимость</div>
        <div className='flex flex-row desktop:w-[241px] mobile:w-[180px] desktop:h-[64px] mobile:h-[37px] desktop:mt-[25px] mobile:mt-[8px] font-sfpro font-bold z-30'>
            <div className='desktop:text-[40px] mobile:text-[23.3px] leading-[2rem] -tracking-[.02em]'>от&nbsp;</div>
            <div className='desktop:text-[64px] mobile:text-[37px] leading-[1rem] -tracking-[.02em]'>$1000</div>
        </div>
    </div>
  )
}

export default Estimated;