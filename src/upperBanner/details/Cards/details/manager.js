import React from 'react'
import YellowCorner from '../../../../svg/yellowcorner';


const Manager = () => {
  return (
    <div className='flex relative overflow-hidden flex-col desktop:w-[592px] desktop:h-[472px] mobile:w-[346px] mobile:h-[276px] rounded-[16px] bg-[#FFFFFF]'>
        <div className='flex font-sfpro font-medium text-[48px] leading-[3rem] mt-[43px] ml-[40px] z-10'>Личный менеджер</div>
        <div className='flex absolute w-[181px] h-[71px] rounded-[709.18px] top-[130px] left-[355px] rotate-[5.153deg] bg-white z-30'>
            <div className='ml-[5px] mt-[5px]'>
                <img src='images/image50.png' alt='manager' className=''/>
            </div>
            <div className='flex flex-col ml-[10px] mt-[20px]'>
                <div className='flex font-sfpro font-bold text-[18.013px] leading-[1.126rem]'>Анастасия</div>
                <div className='flex font-sfpro font-normal text-[9.372px] leading-[0.586rem]'>Любой мессенджер</div>
            </div>
        </div>
        <div className='flex ml-[45px] mt-[61px] z-20'><img src="images/message.png" alt='messages' /></div>
        <div className='flex absolute ml-[100px] mt-[5px] z-10 blur-[20px]'><img src='images/bluecorner.png' alt='corner' /></div>
        <div className='flex absolute z-0'><img src='images/pinkcorner.png' alt='pinkcorner' /></div>
        <div className='flex absolute top-[250px] -left-[200px] z-0 blur-[200px]'><YellowCorner /></div>
    </div>
  )
}

export default Manager;