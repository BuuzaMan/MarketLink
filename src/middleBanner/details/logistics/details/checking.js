import React from 'react'
import Checkbox from '../../../../svg/checkbox';
import Wreck from '../../../../svg/wreck';
import Starbox from '../../../../svg/starbox';
import Down from '../../../../svg/down';
import Remarka from '../../../../svg/remarka';
import RemarkaMiddle from '../../../../svg/remarkamiddle';
import Check from '../../../../svg/check';

const Checking = () => {
  return (
    <div className='flex w-[1208px] mt-[24px] gap-x-[24px]'>
        <div className='flex flex-col w-[589px] h-[532px] rounded-2xl bg-[#FFFFFF] font-sfpro'>
            <div className='w-[440px] mt-[30px] ml-[40px] font-medium text-[48px] leading-[3rem] -tracking-[.06em]'>Внимательный пересчет и проверка на брак</div>
            <div className='grid grid-cols-2 w-[529px] mt-[20px] ml-[38px] gap-x-[11px] gap-y-[13px]'>
                <div className='w-[259px] h-[140px] rounded-[10px] shadow-[0px_3px_6.7px_0px_rgba(7,22,61,0.12)]'>
                    <Checkbox />
                    <div className='mt-[16px] ml-[22px] w-[174px] font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>Детально проверим на брак по вашему техзаданию.</div>
                </div>
                <div className='w-[259px] h-[140px] rounded-[10px] shadow-[0px_3px_6.7px_0px_rgba(7,22,61,0.12)]'>
                    <Wreck />
                    <div className='mt-[16px] ml-[19px] w-[221px] font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>Поможем профессионально исправить брак (сотрудничаем с ателье).</div>
                </div>
                <div className='w-[259px] h-[140px] rounded-[10px] shadow-[0px_3px_6.7px_0px_rgba(7,22,61,0.12)]'>
                    <Starbox />
                    <div className='mt-[10px] ml-[22px] w-[221px] font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>Отпарим одежду, уберем торчащие нитки и приведем в товарный вид.</div>
                </div>
                <div className='w-[259px] h-[140px] rounded-[10px] shadow-[0px_3px_6.7px_0px_rgba(7,22,61,0.12)]'>
                    <Down />
                    <div className='mt-[8px] ml-[19px] w-[221px] font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>Сделаем всё, чтобы минимизировать процент возвратов и списаний.</div>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-[#FEFEFE] rounded-2xl bg-[#FFFFFF] w-[589px] h-[532px]'>
            <div className='flex mt-[30px] ml-[34px]'>
                <div className='font-sfpro font-medium text-[48px] leading-[3rem]'>Услуги склада</div>
                <div className='flex mt-[13px] ml-[20px] rounded-[69.732px] w-[176px] h-[28.431px] bg-gradient-to-r from-[#EB1988] to-[#005AF9] font-sfpro font-bold text-[10.8px] text-white leading-[0.88rem] tracking-[.027em] items-center justify-center'>3 дня хранения бесплатно</div>
            </div>
            <div className='flex relative w-[524px] h-[380px] rounded-xl overflow-hidden mt-[38px] ml-[34px]'>
                <img src='images/storage.png' alt='sklad'/>
                <div className='flex absolute w-[328px] h-[477px] mt-[11px] left-[215px]'><img src='images/worker.png' alt='worker' /></div>
                <div className='flex flex-col absolute ml-[25px] mt-[72px] w-[269px] h-[121px] backdrop-blur-sm'><Remarka /></div>
                <div className='flex absolute ml-[25px] mt-[214px] w-[215px] h-[121px] backdrop-blur-sm'><RemarkaMiddle /></div>
                <div className='absolute mt-[101px] ml-[49px]'><Check /></div>
                <div className='absolute w-[165px] h-[63px] mt-[101px] ml-[84px] font-sfpro font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>Чистый сухой склад для хранения вашего товара.</div>
                <div className='flex absolute ml-[52px] mt-[243px]'><Check /></div>
                <div className='absolute w-[116px] h-[63px ml-[87px] mt-[243px] font-sfpro font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>Дешевле, чем на складе маркетплейса.</div>
            </div>
        </div>
    </div>
  )
};

export default Checking;

