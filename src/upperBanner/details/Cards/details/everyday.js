import React from 'react'
import YellowCircle from '../../../../svg/YellowCircle';
import BlueCircle from '../../../../svg/blueCircle';

const Everyday = () => {
  return (
    <div className='flex flex-col relative overflow-hidden w-[387px] h-[559px] rounded-[16px] bg-[#FFFFFF]'>
        <div className='flex font-sfpro text-[48px] font-medium leading-[3rem] tracking-[-.05em] mt-[36px] ml-[27px]'>Ежедневные поставки на маркетплейсы</div>
        <div className='flex z-40'>
            <div className='ml-[37px] mt-[34px]'><img src="/images/mainPhone.png" alt="phone" /></div>
            <div className='flex absolute ml-[52px] mt-[46px]'><img src="/images/mainScreen.png" alt="screen" /></div>
            <div className='flex absolute ml-[148px] mt-[54px]'><img src="/images/dynamic.png" alt="dynamicIsland" /></div>
            <div className='flex absolute ml-[212px] mt-[63px]'><img src="/images/camera.png" alt="camera" /></div>
            <div className='flex absolute'><img src="images/shadow.png" alt="shadow" /></div>
        </div>
        <div className='flex absolute -left-[170px] mt-[350px] blur-[90px]'><YellowCircle /></div>
        <div className='flex absolute left-[60px] top-[280px] blur-[100px]'><BlueCircle /></div>
    </div>
  )
}

export default Everyday;