import React from 'react'
import WHSP from '../../../../svg/whsp';
import TG from '../../../../svg/TG';
import YellowCircle from '../../../../svg/YellowCircle';

const PersonalManager = () => {
  return (
    <div className='flex flex-col w-[489px] h-[652px] rounded-2xl ml-[24px] relative overflow-hidden bg-[#FFFFFF]'>
        <div className='flex font-sfpro font-medium text-[48px] leading-[3rem] ml-[49px] mt-[38px] w-[410px]'>Персональный менеджер всегда на связи</div>
        <div className='flex font-sfpro font-normal text-[15px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] w-[369px] h-[84px] ml-[49px] mt-[20px]'>Ваши личный ассистент в организации поставки, который отвечает в течении 15 минут и всегда в курсе ваших логистических процессов.</div>
        <div className='flex absolute mt-[235px] z-10'><img src='/images/woman.png' alt='manager' /></div>
        <div className='flex absolute mt-[320px] ml-[70px] z-10'><WHSP /></div>
        <div className='flex absolute mt-[374px] ml-[340px] z-10'><TG /></div>
        <div className='flex rounded-[240px] w-[358px] h-[84px] justify-center items-center z-30 mt-[253px] ml-[67px] backdrop-blur-[64px]'><div className='w-[290px] h-[42px] font-fira font-normal text-[#F5F5F7] text-[16px] leading-[1.3rem] text-center '>На связи в удобном вам мессенджере 7 дней в неделю с 9 до 21.00 Мск</div></div>
        <div className='flex absolute rotate-90 mt-[380px] -left-[270px] z-0 blur-[150px]'><img src='/images/Ellipse3.png' alt='bg glow' /></div>
        <div className='flex absolute -rotate-90 top-[450px] left-[250px] blur-[100px]'><YellowCircle /></div>
    </div>
  )
}

export default PersonalManager;