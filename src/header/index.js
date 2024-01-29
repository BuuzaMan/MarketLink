import React from 'react'
import Whatsapp from '../svg/whatsapp';
import Telegram from '../svg/telegram';
import CalcBtn from '../calcCostBtn';
import HeaderButton from './details/headerButton';

const Header = () => {
  return (
    <header className='flex justify-center'>
        <div className='flex desktop:w-[1274px] desktop:h-[88px] mobile:w-[345px] h-[91px] relative rounded-[734px] shadow-[0px_2.312px_136.64px_0px_rgba(7,22,61,0.12)] relative desktop:mt-[20px] mobile:mt-[15px] bg-white'>
            <div className='flex desktop:w-[232px] desktop:h-[24px] mobile:w-[204px] h-[21px] desktop:mt-[32px] desktop:ml-[42px] mobile:mt-[36.24px] mobile:ml-[31.47px]'>
                <div className='font-gothic desktop:text-[27.81px] mobile:text-[24.449px] font-normal desktop:leading-[1.512rem] mobile:leading-[1.329rem] desktop:tracking-[.261em] mobile:tracking-[.229em] uppercase'>MARKET</div>
                <div className='font-macan desktop:text-[27.81px] mobile:text-[24.449px] font-normal desktop:leading-[1.512rem] mobile:leading-[1.329rem] desktop:tracking-[.261em] mobile:tracking-[.229em] '>LlNK</div>
            </div>
           <div className='flex desktop:flex tablet:flex mobile:hidden font-sfpro gap-x-4 text-[18.485px] font-normal leading-[1.155rem] mt-[33px] ml-[98px]'>
                <button className='flex'>Услуги</button>
                <button className='flex'>Цены</button>
                <button className='flex'>Карго из Китая</button>
                <button className='flex'>Отзывы</button>
                <button className='flex'>О нас</button>
                <button className='flex'>Контакты</button>
           </div>
           <button className='ml-[43px] desktop:block tablet:block mobile:hidden'><Whatsapp /></button>
           <button className='ml-[15px] desktop:block tablet:block mobile:hidden'><Telegram /></button>
           <div className='mt-[16px] mr-[18px] ml-[12px] desktop:block tablet:block mobile:hidden'><CalcBtn /></div>
           <div className='desktop:hidden tablet:hidden mobile:flex ml-[32px]'><HeaderButton /></div>
        </div>
    </header>
  )
};
export default Header;
