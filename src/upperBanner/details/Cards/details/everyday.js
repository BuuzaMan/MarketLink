import React from 'react'
import YellowCircle from '../../../../svg/YellowCircle';
import BlueCircle from '../../../../svg/blueCircle';

const Everyday = () => {
  return (
    <div className='flex flex-col relative overflow-hidden desktop:w-[387px] desktop:h-[559px] mobile:w-[346px] mobile:h-[500px] desktop:rounded-[16px] mobile:rounded-[14.3px] bg-[#FFFFFF]'>
        <div className='flex font-sfpro desktop:text-[48px] mobile:text-[32px] desktop:w-[329px] mobile:w-[250px] desktop:h-[144px] mobile:h-[100px] font-medium desktop:leading-[3rem] mobile:leading-[2rem] desktop:-tracking-[.05em] mobile:-tracking-[.04em] desktop:mt-[36px] mobile:mt-[24px] desktop:ml-[27px] mobile:ml-[23.5px]'>Ежедневные поставки на маркетплейсы</div>
        <div className='flex z-40'>
            <div className='ml-[37px] mt-[34px]'><img src="/images/mainPhone.png" alt="phone" className='desktop:w-[311px] mobile:w-[279px]'/></div>
            <div className='flex absolute desktop:ml-[51px] mobile:mt-[45px] desktop:mt-[46px] mobile:ml-[50px]'><img src="/images/mainScreen.png" alt="screen" className='desktop:w-[283px] mobile:w-[253px] desktop:rounded-[38px] mobile:rounded-[38px]'/></div>
            <div className='flex absolute desktop:ml-[148px] desktop:mt-[54px] mobile:mt-[50px] mobile:ml-[140px]'><img src="/images/dynamic.png" alt="dynamicIsland" className='desktop:w-[90px] desktop:h-[27px] mobile:w-[80px]'/></div>
            <div className='flex absolute desktop:ml-[212px] desktop:mt-[63px] mobile:mt-[57px] mobile:ml-[200px]'><img src="/images/camera.png" alt="camera" /></div>
            <div className='flex absolute'><img src="images/shadow.png" alt="shadow" /></div>
        </div>
        <div className='flex absolute desktop:-left-[170px] mobile:-left-[200px] desktop:mt-[350px] mobile:mt-[270px] blur-[50px]'><YellowCircle /></div>
        <div className='flex absolute desktop:left-[60px] mobile:left-[150px] desktop:top-[280px] mobile:top-[200px] blur-[100px]'><BlueCircle /></div>
    </div>
  )
}

export default Everyday;