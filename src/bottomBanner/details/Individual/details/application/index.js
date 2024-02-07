import React from 'react'
import LittleYellow from '../../../../../svg/littleYellow';
import PinkCircle from '../../../../../svg/pinkCircle';
import BlueCircle from '../../../../../svg/blueCircle';


const Application = () => {
  return (
    <div className='desktop:w-[592px] mobile:w-[346px] desktop:h-[567px] mobile:h-[348px] bg-black rounded-2xl'>
        <div className='flex flex-col desktop:mt-[41px] mobile:mt-[15.96px] desktop:ml-[42px] mobile:ml-[24.55px]'>
            <div className='font-bold desktop:text-[24px] mobile:text-[16px] text-white desktop:leading-[1.3rem] mobile:leadimg-[1.3rem] desktop:-tracking-[.03em] mobile:-tracking-[.02em]'>Опишите вашу заявку</div>
            <input 
                type='text'
                className='desktop:w-[508.194px] mobile:w-[297px] desktop:h-[160px] mobile:h-[93.5px] desktop:rounded-[12.84px] mobile:rounded-[8px] bg-[#F5F5F7] desktop:mt-[8px] mobile:mt-[4.68px] desktop:pb-[116px] mobile:pb-[64.07px] desktop:pl-[27.11px] mobile:pl-[15.85px] placeholder:font-sfpro placeholder:font-normal desktop:placeholder:text-[16px] mobile:placeholder:text-[12px] placeholder:text-[#828282] placeholder:leading-[1.3rem] placeholder:tracking-[.04em] outline-none'
                placeholder='Нашей компании нужно...' >
            </input>
            <div className='font-bold desktop:text-[24px] mobile:text-[16px] text-white desktop:leading-[1.3rem] mobile:leading-[1.3rem] desktop:-tracking-[.03em] mobile:-tracking-[.02em] desktop:mt-[8px] mobile:mt-[4.68px]'>Укажите ваш номер телефона</div>
            <input 
                type='text'
                className='desktop:w-[508.194px] mobile:w-[297px] desktop:h-[64px] mobile:h-[37.4px] desktop:rounded-[12.84px] mobile:rounded-[8px] bg-[#F5F5F7] desktop:mt-[8px] mobile:mt-[4.68px] desktop:pl-[27.11px] mobile:pl-[11.27px] placeholder:font-sfpro placeholder:font-normal desktop:placeholder:text-[16px] mobile:placeholder:text-[12px] placeholder:text-[#828282] placeholder:leading-[1rem] placeholder:tracking-[.04em] outline-none'
                placeholder='+1 234 567 89 00'>
            </input>
            <button className='desktop:w-[508px] mobile:w-[297px] desktop:h-[64px] mobile:h-[56px] bg-white desktop:mt-[28px] mobile:mt-[14.9px] relative overflow-hidden desktop:rounded-[555px] mobile:rounded-[324.3px] font-extrabold desktop:text-[16px] mobile:text-[16px] leading-[1.3rem] text-black'>
                <div className=''>Отправить заявку</div>
                <div className='absolute blur-[120px] -bottom-[100px] -left-[40px] z-0'><LittleYellow /></div>
                <div className='absolute -bottom-[120px] left-[205px] blur-[200px] z-0'><PinkCircle /></div>
                <div className='absolute -top-[140px] left-[250px] blur-[200px] z-0'><BlueCircle /></div>
            </button>
            <div className='flex desktop:mt-[28px] mobile:mt-[10px]'>
                <button><img src='images/Wtsp.png' alt='whatsapp' className='desktop:w-[53px] desktop:h-[53px] mobile:w-[31px] mobile:h-[31px]'/></button>
                <button><img src='images/Tlgrm.png' alt='telegram' className='desktop:w-[53px] desktop:h-[53px] mobile:w-[31px] mobile:h-[31px] mobile:ml-[8.72px]'/></button>
                <div className='desktop:w-[292px] mobile:w-[192px] desktop:h-[63px] mobile:h-[39px] desktop:ml-[36px] mobile:ml-[20.7px] text-[#828282] desktop:text-[16px] mobile:text-[10px] font-normal leading-[0.9rem] tracking-[.04em]'>Или свяжитесь с нами в мессенджерах. Менеджер отправит вам форму ТЗ для точного рассчета.</div>
            </div>
        </div>
    </div>
  )
}

export default Application;