import React from 'react'
import YellowCorner from '../../../../svg/yellowcorner';


const Manager = () => {
  return (
    <div className='flex relative overflow-hidden flex-col desktop:w-[592px] desktop:h-[472px] mobile:w-[346px] mobile:h-[276px] desktop:rounded-[16px] mobile:rounded-[9.35px] bg-[#FFFFFF]'>
        <div className='flex font-sfpro font-medium desktop:text-[48px] mobile:text-[32px] desktop:leading-[3rem] mobile:leading-[2rem] desktop:-tracking-[.06em] mobile:-tracking-[.04em] desktop:mt-[43px] mobile:mt-[25.13px] desktop:ml-[40px] mobile:ml-[23px] z-10'>Личный менеджер</div>
        <div className='flex absolute desktop:w-[181px] mobile:w-[106px] desktop:h-[71px] mobile:h-[42px] desktop:rounded-[709.18px] mobile:rounded-[414px] desktop:top-[130px] mobile:top-[73px] desktop:left-[355px] mobile:left-[212px] rotate-[5.153deg] bg-white z-30'>
            <div className='desktop:ml-[5px] mobile:ml-[4.3px] desktop:mt-[5px] mobile:mt-[3.73px]'>
                <img src='images/image50.png' alt='manager' className='desktop:w-[59px] desktop:h-[59px] mobile:w-[34px] mobile:h-[34px]'/>
            </div>
            <div className='flex flex-col desktop:ml-[10px] desktop:mt-[20px] mobile:ml-[3.19px] mobile:mt-[12px]'>
                <div className='flex font-sfpro font-bold desktop:text-[18.013px] mobile:text-[10.528px] desktop:leading-[1.126rem] mobile:leading-[0.658rem]'>Анастасия</div>
                <div className='flex font-sfpro font-normal text-[#5C5C5C] desktop:text-[9.372px] mobile:text-[5.477px] leading-[0.586rem]'>Любой мессенджер</div>
            </div>
        </div>
        <div className='flex desktop:ml-[45px] mobile:ml-[23px] desktop:mt-[65px] mobile:mt-[27px] z-20'><img src="images/message.png" alt='messages' className='desktop:w-[492px] mobile: mobile:w-[300px]'/></div>
        <div className='flex absolute ml-[100px] mt-[5px] z-10 blur-[20px]'><img src='images/bluecorner.png' alt='corner' /></div>
        <div className='flex absolute z-0'><img src='images/pinkcorner.png' alt='pinkcorner' /></div>
        <div className='flex absolute desktop:top-[250px] desktop:-left-[100px] mobile:top-[150px] mobile:-left-[300px] z-0 blur-[100px]'><YellowCorner /></div>
    </div>
  )
}

export default Manager;