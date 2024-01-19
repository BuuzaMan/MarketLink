import React from 'react'
import Check from '../../../../svg/check';

const Delivery = () => {
  return (
    <div className='flex flex-col w-[592px] h-[756px] rounded-2xl relative overflow-hidden z-40'>
        <div className='flex flex-col mt-[31px] ml-[37px]'>
            <div className='w-[488px] h-[192px] font-sfpro font-medium text-[48px] leading-[3rem] -tracking-[.06em] z-40'>Ответственная доставка из Китая в Россию с гарантией качества и сроков.</div>
            <div className='flex rounded-[32px] bg-gradient-to-r from-[#EB1988] to-[#005AF9] w-[337px] h-[56px] items-center justify-center font-sfpro font-bold text-[24px] leading-[1.95rem] -tracking-[.03em] text-white mt-[40px] z-40'>Грузы от 1кг до 100 тонн.</div>
            <div className='flex flex-col mt-[192px] gap-y-[16px] z-40'>
                <div className='flex w-[515px] h-[72px] shadow-[0_3px_6.7px_0px_rgba(7,22,61,0.05);] border-[1px] border-[#F0F0F0] rounded-[10px] bg-white'>
                    <div className='mt-[24.34px] ml-[22.56px]'><Check /></div>
                    <div className='flex flex-wrap ml-[17px] mt-[15px] h-[42px] w-[350px] font-sfpro'>
                        <div className='font-bold text-[16px] leading-[1.3rem] tracking-[.04em]'>Доставка&nbsp;</div>
                        <div className='font-normal text-[16px] leading-[1.3rem] tracking-[.04em]'>от 12 дней, от 5 кг, от 1.8$.</div>
                        <div className='font-normal text-[16px] leading-[1.3rem] tracking-[.04em]'>Жд перевозки и автодоставка.</div>
                    </div>
                </div>
                <div className='flex w-[515px] h-[72px] shadow-[0_3px_6.7px_0px_rgba(7,22,61,0.05);] border-[1px] border-[#F0F0F0] rounded-[10px] bg-white'>
                    <div className='mt-[20px] ml-[22.56px]'><Check /></div>
                    <div className='flex ml-[17px] mt-[21.5px] h-[21px] w-[456px] font-sfpro'>
                        <div className='font-bold text-[16px] leading-[1.3rem] tracking-[.04em]'>Отправляем&nbsp;</div>
                        <div className='font-normal text-[16px] leading-[1.3rem] tracking-[.04em]'>ТК по РФ, РБ, КЗ или отгрузка самовывозом.</div>
                    </div>
                </div>
                <div className='flex w-[515px] h-[72px] shadow-[0_3px_6.7px_0px_rgba(7,22,61,0.05);] border-[1px] border-[#F0F0F0] rounded-[10px] bg-white'>
                    <div className='mt-[20px] ml-[22.56px]'><Check /></div>
                    <div className='flex ml-[17px] mt-[20px] h-[21.3px] w-[448px] font-sfpro'>
                        <div className='font-bold text-[16px] leading-[1.3rem] tracking-[.04em]'>Свои склады и офисы&nbsp;</div>
                        <div className='font-normal text-[16px] leading-[1.3rem] tracking-[.04em]'>в Москве, Иу, Гуанчжоу.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute w-[1802px] h-[815px] -top-[300px] -left-[600px] z-0'><img src='images/sky.png' alt='sky' /></div>
        <div className='absolute w-[1257px] h-[676px] z-0 top-[275px]'><img src='images/containers.png' alt='cargo' /></div>
    </div>
  )
};

export default Delivery;
