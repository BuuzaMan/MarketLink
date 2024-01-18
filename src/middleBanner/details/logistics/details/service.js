import React from 'react'
import GradientBox from '../../../../svg/gradientBox';
import Mark from '../../../../svg/mark';
import DeliveryCar from '../../../../svg/deliveryCar';

const Service = () => {
  return (
    <div className='w-[1208px] grid grid-cols-4 gap-x-6 mt-[40px]'>
        <div className='flex flex-col w-[284px] h-[473px] rounded-[12.84px] bg-white shadow-[0px_1px_10px_0px_rgba(7,22,61,0.12)]'>
            <div className='mt-[33px] ml-[32px]'><GradientBox /></div>
            <div className='mt-[24px] ml-[32px] font-sfpro'>
                <div className='w-[180px] h-[48px] font-bold text-[24px] leading-[1.5rem] -tracking-[.03em]'>Забор товара день в день</div>
                <div className='w-[220px] h-[210px] mt-[16px] font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>
                    <div>Садовод, ТЯК, Карго, либо примем ваш груз от транспортной компании.</div>
                    <div className='mt-[20px]'>Вывезем с СЦ Южные Ворота и Дзержинский, чтобы вы не переплачивали за хранение.</div>
                    <div className='mt-[20px]'>Любые объемы от 10 шт.</div>
                </div>
            </div>
        </div>
        <div className='flex flex-col w-[284px] h-[473px] rounded-[12.84px] bg-white shadow-[0px_1px_10px_0px_rgba(7,22,61,0.12)]'>
            <div className='mt-[33px] ml-[32px]'><GradientBox /></div>
            <div className='mt-[24px] ml-[32px] font-sfpro'>
                <div className='w-[180px] h-[48px] font-bold text-[24px] leading-[1.5rem] -tracking-[.03em]'>Упаковка и переупаковка</div>
                <div className='w-[220px] h-[210px] mt-[16px] font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>
                    <div>Более 10 видов упаковки, подберем подходящую под ваш товар.</div>
                    <div className='mt-[20px] font-bold underline' style={{ backgroundImage: 'linear-gradient(92deg, #EB1988 4.78%, #005AF9 100%)', backgroundClip: 'text', color: 'transparent'}}>Посмотреть варианты упаковки.</div>
                    <div className='mt-[20px]'>Сотрудничаем с проверенными типографиями: распечатаем и упакуем ваши вложения.</div>
                    <div className='mt-[20px]'>Вложим подарки, соберем комплекты</div>
                </div>
            </div>
        </div>
        <div className='flex flex-col w-[284px] h-[473px] rounded-[12.84px] bg-white shadow-[0px_1px_10px_0px_rgba(7,22,61,0.12)]'>
            <Mark />
            <div className='mt-[24px] ml-[32px] font-sfpro'>
                <div className='w-[180px] h-[48px] font-bold text-[24px] leading-[1.5rem] -tracking-[.03em]'>Маркировка товара</div>
                <div className='w-[220px] h-[210px] mt-[16px] font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>
                    <div>Распечатаем и расклеим кизы с вашим ШК.</div>
                    <div className='mt-[20px]'>Одинарная и двойная маркировка.</div>
                    <div className='mt-[20px]'>Работаем по системе "Честный знак".</div>
                </div>
            </div>
        </div>
        <div className='flex flex-col w-[284px] h-[473px] rounded-[12.84px] bg-white shadow-[0px_1px_10px_0px_rgba(7,22,61,0.12)]'>
            <DeliveryCar />
            <div className='mt-[24px] ml-[32px] font-sfpro'>
                <div className='w-[180px] h-[48px] font-bold text-[24px] leading-[1.5rem] -tracking-[.03em]'>Доставка на маркетплейсы</div>
                <div className='w-[220px] h-[210px] mt-[16px] font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>
                    <div>Запланируем и организуем поставку или отвезем в назначенный вами день.</div>
                    <div className='mt-[20px]'>Ежедневная отправка на маркетплейсы по системам FBO и FBS.</div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Service;
