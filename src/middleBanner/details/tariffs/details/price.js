import React from 'react'
import Pricing from './pricing'
import BlueCircle from '../../../../svg/blueCircle'
import PinkCircle from '../../../../svg/pinkCircle'
import BigYellowCircle from '../../../../svg/BigYellowCircle'

const Price = () => {
  return (
    <div className='flex flex-col relative overflow-hidden rounded-2xl bg-[#FFFFFF] desktop:w-[592px] mobile:w-[346px] desktop:h-[275px] mobile:h-[425px] desktop:mt-[19px] mobile:mt-[20px]'>
        <div className='font-sfpro desktop:font-medium mobile:font-medium desktop:text-[40px] mobile:text-[32px] desktop:leading-[2.5rem] mobile:leading-[2rem] desktop:-tracking-[.05em] mobile:-tracking-[.02em] desktop:mt-[32.99px] mobile:mt-[27px] desktop:ml-[28.24px] mobile:ml-[30px] desktop:w-[232px] mobile:w-[250px] desktop:h-[80px] mobile:h-[64px] z-10'>Посмотрите прайс-лист</div>
        <button className='rounded-[229px] bg-black desktop:w-[159px] mobile:w-[147px] desktop:h-[56.3px] mobile:h-[56px] z-10 text-white font-sfpro font-bold text-[16px] leading-[1.3rem] desktop:mt-[84px] mobile:mt-[21px] desktop:ml-[28.24px] mobile:ml-[30px]'>Прайс-лист</button>
        <div className='absolute -rotate-45 -top-[90px] left-[190px] blur-[200px] z-0'><BigYellowCircle /></div>
        <div className='absolute left-[250px] top-[160px] blur-[200px] z-0'><PinkCircle /></div>
        <div className='absolute -left-[130px] top-[300px] blur-[150px] z-0'><BlueCircle /></div>
        <div className='absolute desktop:top-[30px] mobile:top-[195px] desktop:left-[334px] mobile:left-[45px]'><Pricing /></div>
    </div>
  )
}

export default Price