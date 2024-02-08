import React from 'react'
import WHSP from '../../../../../svg/whsp';
import TG from '../../../../../svg/TG';
import YellowCircle from '../../../../../svg/YellowCircle';

const PersonalManager = () => {
  return (
    <div className='flex flex-col desktop:w-[489px] mobile:w-[346px] desktop:h-[652px] mobile:h-[496px] desktop:rounded-2xl mobile:rounded-[11.3px] desktop:ml-[24px] relative overflow-hidden bg-[#FFFFFF]'>
        <div className='flex font-sfpro font-medium desktop:text-[48px] mobile:text-[32px] desktop:leading-[3rem] mobile:leading-[2rem] desktop:-tracking-[.06em] mobile:-tracking-[.04em] desktop:ml-[49px] mobile:ml-[23px] desktop:mt-[38px] mobile:mt-[18px] desktop:w-[410px] mobile:w-[250px]'>Персональный менеджер всегда на связи</div>
        <div className='flex font-sfpro font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] desktop:w-[369px] mobile:w-[300px] desktop:h-[84px] mobile:h-[84px] desktop:ml-[49px] mobile:ml-[23px] desktop:mt-[20px] mobile:mt-[12px]'>Ваши личный ассистент в организации поставки, который отвечает в течении 15 минут и всегда в курсе ваших логистических процессов.</div>
        <div className='flex absolute desktop:mt-[235px] mobile:mt-[201px] z-10'><img src='/images/woman.png' alt='manager' className=''/></div>
        <div className='flex absolute desktop:mt-[320px] mobile:mt-[261px] desktop:ml-[70px] mobile:ml-[44px] desktop:w-[71px] mobile:w-[51px] z-10'><WHSP /></div>
        <div className='flex absolute desktop:mt-[374px] mobile:mt-[300px] desktop:ml-[340px] mobile:ml-[249px] desktop:w-[71px] mobile:w-[51px] z-10'><TG /></div>
        <div className='flex absolute desktop:rounded-[240px] mobile:rounded-[170px] desktop:w-[358px] mobile:w-[253px] desktop:h-[84px] mobile:h-[59px] justify-center items-center z-30 desktop:mt-[536px] mobile:mt-[414px] desktop:ml-[67px] mobile:ml-[41.4px] backdrop-blur-[64px]'><div className='desktop:w-[290px] mobile:w-[205px] desktop:h-[42px] mobile:h-[30px] font-fira font-normal text-[#F5F5F7] desktop:text-[16px] mobile:text-[11.3px] desktop:leading-[1.3rem] mobile:leading-[0.92rem] text-center '>На связи в удобном вам мессенджере 7 дней в неделю с 9 до 21.00 Мск</div></div>
        <div className='flex absolute rotate-90 desktop:mt-[380px] mobile:mt-[300px] mobile:-left-[300px] desktop:-left-[270px] z-0 blur-[150px]'><img src='/images/Ellipse3.png' alt='bg glow' /></div>
        <div className='flex absolute desktop:-rotate-90 mobile:rotate-360 desktop:top-[450px] mobile:top-[300px] desktop:left-[250px] mobile:-left-[150px] blur-[100px] z-0'><YellowCircle /></div>
    </div>
  )
}

export default PersonalManager;