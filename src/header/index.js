import React from 'react'
import Whatsapp from '../svg/whatsapp';
import Telegram from '../svg/telegram';
import CalcBtn from '../calcCostBtn';

const Header = () => {
  return (
    <header className='flex'>
        <div className='flex w-[1274px] h-[88px] rounded-[734px] shadow-[0px_2.312px_136.64px_0px_rgba(7,22,61,0.12)] relative mt-[20px] ml-[83px]'>
            <div className='flex mt-[32px] ml-[42px]'>
                <div className='font-gothic text-[27.81px] font-normal leading-[1.512rem] tracking-[.2em] uppercase'>MARKET</div>
                <div className='font-macan text-[26px] font-normal leading-[1.512rem] tracking-[.2em]'>LlNK</div>
            </div>
           <div className='flex font-sfpro gap-x-4 text-[18.485px] font-normal leading-[1.155rem] mt-[33px] ml-[98px]'>
                <button className='flex'>Услуги</button>
                <button className='flex'>Цены</button>
                <button className='flex'>Карго из Китая</button>
                <button className='flex'>Отзывы</button>
                <button className='flex'>О нас</button>
                <button className='flex'>Контакты</button>
           </div>
           <button className='ml-[43px]'><Whatsapp /></button>
           <button className='ml-[15px]'><Telegram /></button>
           <div className='mt-[16px] mr-[18px] ml-[12px]'><CalcBtn /></div>
        </div>
    </header>
  )
};
export default Header;
