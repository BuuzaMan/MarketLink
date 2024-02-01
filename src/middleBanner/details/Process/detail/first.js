import React from 'react'
import Doc from '../../../../svg/doc';
import YellowCircle from '../../../../svg/YellowCircle';
import BlueCircle from '../../../../svg/blueCircle';
import PinkCircle from '../../../../svg/pinkCircle';

const First = () => {
  return (
    <div className='flex flex-col relative overflow-hidden desktop:w-[589px] mobile:w-[346px] desktop:h-[532px] mobile:h-[330px] desktop:rounded-2xl mobile:rounded-[11.3px] bg-[#FEFEFE]'>
      <div className='flex font-sfpro font-medium desktop:text-[48px] mobile:text-[32px] desktop:leading-[3rem] mobile:leading-[2rem] desktop:-tracking-[.06em] mobile:-tracking-[.04em]  desktop:w-[200px] mobile:w-[150px] desktop:mt-[45px] mobile:mt-[21px] desktop:ml-[46px] mobile:ml-[23px] z-40'>Работаем “в белую”</div>
      <div className='flex z-40 flex-col desktop:mt-[125.27px] mobile:mt-[75px] desktop:ml-[42px] mobile:ml-[23px] font-sfpro font-normal desktop:text-[26.488px] mobile:text-[14px] text-[#4F4F4F] desktop:leading-[2.152rem] mobile:leading-[0.875rem] desktop:gap-y-[20.59px] mobile:gap-y-[10px] z-30'>
        <div className='flex desktop:w-[144.832px] mobile:w-[80px] desktop:h-[60.813px] mobile:h-[35px] desktop:rounded-[13.244px] mobile:rounded-[11.3px] bg-white shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] items-center justify-center'>Договор</div>
        <div className='flex desktop:w-[197.146px] mobile:w-[94px] desktop:h-[60.488px] mobile:h-[35px] desktop:rounded-[13.244px] mobile:rounded-[11.3px] bg-white shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] items-center justify-center'>Акты приема</div>
        <div className='flex desktop:w-[221.146px] mobile:w-[110px] desktop:h-[60.488px] mobile:h-[35px] desktop:rounded-[13.244px] mobile:rounded-[11.3px] bg-white shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] items-center justify-center'>Акты передачи</div>
      </div>
      <div className='flex absolute desktop:left-[245px] mobile:left-[150px] desktop:w-[343px] desktop:h-[530px] mobile:w-[220px] h-[340px] z-40'><Doc /></div>
      <div className='flex absolute desktop:top-[350px] mobile:top-[250px] desktop:-left-[80px] mobile:-left-[150px] blur-[100px] z-10'><YellowCircle /></div>
      <div className='flex absolute desktop:top-[380px] mobile:top-[180px] desktop:left-[500px] mobile:left-[220px] blur-[100px] z-10'><BlueCircle /></div>
      <div className='flex absolute desktop:top-[350px] mobile:top-[180px] desktop:left-[420px] mobile:left-[180px] blur-[180px] z-10'><PinkCircle /></div>
    </div>
  )
}

export default First;