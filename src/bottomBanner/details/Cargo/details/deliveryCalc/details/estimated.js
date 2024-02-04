import React from 'react'

const Estimated = () => {
  return (
    <div className='desktop:w-[241px] desktop:h-[93px] desktop:mt-[23px]'>
        <div className='font-sfpro font-bold desktop:text-[24px] leading-[1.3rem] desktop:-tracking-[.02em]'>Примерная стоимость</div>
        <div className='flex flex-row desktop:w-[241px] desktop:h-[64px] desktop:mt-[25px] font-sfpro font-bold z-30'>
            <div className='text-[40px] leading-[2rem] -tracking-[.02em]'>от&nbsp;</div>
            <div className='text-[64px] leading-[1rem] -tracking-[.02em]'>$1000</div>
        </div>
    </div>
  )
}

export default Estimated;