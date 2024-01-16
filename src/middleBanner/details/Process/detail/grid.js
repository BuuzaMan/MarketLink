import React from 'react'
import Doc from '../../../../svg/doc';

let Grid = () => {
  return (
    <div className='flex grid grid-cols-2 w-[1208px] h-[500px] mt-[40px] gap-x-6 gap-y-6 items-center justify-center'>
        <div className='flex flex-col relative overflow-hidden w-[589px] h-[532px] rounded-2xl shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
            <div className='flex font-sfpro font-medium text-[48px] leading-[3rem] w-[250px] mt-[45px] ml-[46px]'>Работаем “в белую”.</div>
            <div className='flex flex-col mt-[125.27px] ml-[42px] font-sfpro font-normal text-[26.488px] text-[#4F4F4F] leading-[2.152rem] gap-y-[20.59px]'>
                <div className='flex w-[144.832px] h-[60.813px] rounded-[13.244px] shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] items-center justify-center'>Договор</div>
                <div className='flex w-[197.146px] h-[60.488px] rounded-[13.244px] shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] items-center justify-center'>Акты приема</div>
                <div className='flex w-[221.146px] h-[60.488px] rounded-[13.244px] shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] items-center justify-center'>Акты передачи</div>
            </div>
            <div className='flex absolute left-[245px]'><Doc /></div>
        </div>
        <div className='flex w-[589px] h-[532px] rounded-2xl shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'></div>
        <div className='flex w-[589px] h-[532px] rounded-2xl shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'></div>
        <div className='flex w-[589px] h-[532px] rounded-2xl shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'></div>
    </div>
  )
};

export default Grid;
