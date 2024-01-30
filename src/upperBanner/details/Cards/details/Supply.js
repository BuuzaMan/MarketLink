import React from 'react'
import BlueCircle from '../../../../svg/blueCircle';
import PinkCircle from '../../../../svg/pinkCircle';


const Supply = () => {
  return (
    <div className='flex flex-col relative w-[387px] h-[559px] rounded-[16px] bg-white overflow-hidden bg-[#FFFFFF]'>
        <div className='flex flex-col mt-[36px] ml-[31px] z-40'>
          <div className='flex font-sfpro text-[48px] font-medium leading-[3rem] tracking-[-.05em]'>36 часов</div>
          <div className='flex font-sfpro text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] mt-[12px] w-[274px]'>среднее время от поступления заявки до поставки.</div>
        </div>
        <div><img src="/images/truck.png" alt="truck" className='flex absolute bottom-[1px] z-40'/></div>
        <div className='flex absolute mt-[350px] blur-[100px]'><BlueCircle /></div>
        <div className='flex absolute top-[350px] -left-[120px] blur-[150px] z-30'><BlueCircle /></div>
        <div className='flex absolute -left-[90px] top-[140px] blur-[80px] z-10'><PinkCircle /></div>
    </div>
  )
}

export default Supply;