import React from 'react'
import BlueCircle from '../../../../svg/blueCircle';
import PinkCircle from '../../../../svg/pinkCircle';


const Supply = () => {
  return (
    <div className='flex flex-col relative desktop:w-[387px] mobile:w-[346px] desktop:h-[559px] mobile:h-[464px] desktop:rounded-[16px] mobile:rounded-[14.3px] bg-white overflow-hidden bg-[#FFFFFF]'>
        <div className='flex flex-col desktop:mt-[36px] mobile:mt-[23px] desktop:ml-[31px] mobile:ml-[23.5px] z-40'>
          <div className='flex font-sfpro desktop:text-[48px] mobile:text-[32px] font-medium desktop:leading-[3rem] mobile:leading-[2rem] desktop:-tracking-[.05em] mobile:-tracking-[.04em]'>36 часов</div>
          <div className='flex font-sfpro desktop:w-[274px] desktop:h-[42px] mobile:w-[245px] text-[16px] text-[#4F4F4F] leading-[1.3rem] -tracking[.04em] mt-[12px] w-[274px]'>среднее время от поступления заявки до поставки.</div>
        </div>
        <div className='absolute z-40 desktop:top-[75px] mobile:top-[45px]'><img src="/images/truck.png" alt="truck"/></div>
        <div className='flex absolute desktop:mt-[350px] mobile:mt-[400px] blur-[100px]'><BlueCircle /></div>
        <div className='flex absolute desktop:top-[350px] desktop:-left-[120px] mobile:-left-[100px] mobile:top-[300px] blur-[120px] z-30'><BlueCircle /></div>
        <div className='flex absolute desktop:-left-[90px] desktop:top-[140px] mobile:-left-[180px] mobile:top-[100px] blur-[120px] z-10'><PinkCircle /></div>
    </div>
  )
}

export default Supply;