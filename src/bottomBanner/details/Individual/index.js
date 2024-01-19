import React from 'react'
import PinkCircle316px from '../../../svg/pinkCircle316px';
import Blue316 from '../../../svg/blue316';
import Yellow555 from '../../../svg/yellow555';
import LittleYellow from '../../../svg/littleYellow';
import PinkCircle from '../../../svg/pinkCircle';
import BlueCircle from '../../../svg/blueCircle';
import Wtsp from '../../../svg/wtsp';
import Tlgrm from '../../../svg/tlgrm';

const Individual = () => {
  return (
    <div className='flex flex-col font-sfpro items-center'>
        <div className='w-[950px] h-[128px] text-center font-medium text-[64px] leading-[3rem] -tracking-[.03em]'>Рассчитать поставку по индивидуальным условиям</div>
        <div className='flex w-[1208px] h-[567px] gap-x-6'>
          <div className='flex flex-col rounded-2xl overflow-hidden relative w-[592px] h-[567px]'>
            <div className='w-[488px] h-[192px] font-bold text-[73.412px] leading-[5.84rem] -tracking-[.03em] mt-[36px] ml-[51px]'>Скидка</div>
            <div className='absolute w-[592px] h-[567px] font-bold text-[442.561px]  text leading-[27.66rem] text-white z-20 mt-[113px] ml-[49px]' style={{ backgroundImage: 'linear-gradient(180deg, #F5F5F7 65.75%, #F5F5F7 100%)', backgroundClip: 'text', color: 'transparent' }}>20</div>
            <div className='absolute z-30 w-[514px] h-[308px] transform -scale-x-100 mt-[271px] ml-[130px]'><img src='images/fulltruck.png' alt='truck' /></div>
            <div className='absolute z-40 font-medium text-[118.882px] text-[#F5F5F7] leading-[7.43rem] -tracking-[.669em] mt-[390px] ml-[477px]'>%</div>
            <div className='absolute'>
              <div className='absolute z-0'><PinkCircle316px /></div>
              <div className='absolute z-0'><Blue316 /></div>
              <div className='absolute z-0'><Yellow555 /></div>
            </div>
          </div>
          <div className='w-[592px] h-[567px] bg-black rounded-2xl'>
            <div className='flex flex-col mt-[41px] ml-[42px]'>
              <div className='font-bold text-[24px] text-white leading-[1.95rem] -tracking-[.03em]'>Опишите вашу заявку</div>
              <input 
                type='text'
                className='w-[508.194px] h-[160px] rounded-[12.84px] bg-[#F5F5F7] mt-[8px] pb-[116px] pl-[27.11px] placeholder:font-sfpro placeholder:font-normal placeholder:text-[16px] placeholder:text-[#828282] placeholder:leading-[1.3rem] placeholder:tracking-[.04em] outline-none'
                placeholder='Нашей компании нужно...' >
              </input>
              <div className='font-bold text-[24px] text-white leading-[1.95rem] -tracking-[.03em] mt-[8px]'>Укажите ваш номер телефона</div>
              <input 
                type='text'
                className='w-[508.194px] h-[64px] rounded-[12.84px] bg-[#F5F5F7] mt-[8px] pl-[27.11px] placeholder:font-sfpro placeholder:font-normal placeholder:text-[16px] placeholder:text-[#828282] placeholder:leading-[1.3rem] placeholder:tracking-[.04em] outline-none'
                placeholder='+1 234 567 89 00'>
              </input>
              <button className='w-[508px] h-[64px] bg-white mt-[28px] relative overflow-hidden rounded-[555px] font-bold text-[16px] leading-[1.3rem] z-40'>
                <div className=''>Отправить заявку</div>
                <div className='absolute blur-[120px] -bottom-[100px] -left-[40px] z-0'><LittleYellow /></div>
                <div className='absolute -bottom-[120px] left-[205px] blur-[200px] z-0'><PinkCircle /></div>
                <div className='absolute -top-[140px] left-[250px] blur-[200px] z-0'><BlueCircle /></div>
              </button>
              <div className='flex mt-[28px]'>
                <button><Wtsp /></button>
                <button className='ml-[14.92px]'><Tlgrm /></button>
                <div className='w-[292px] h-[63px] ml-[36px] text-[#828282] text-[16px] font-normal leading-[1.3rem] tracking-[.04em]'>Или свяжитесь с нами в мессенджерах. Менеджер отправит вам форму ТЗ для точного рассчета.</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
};

export default Individual;
