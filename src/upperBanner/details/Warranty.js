import React from 'react'
import Machine from '../../svg/machine';
import Downgrade from '../../svg/downgrade';
import Shield from '../../svg/shield';
import Photo from '../../svg/photo';
import CalcBtn from '../../calcCostBtn';

let  Warranty = () => {
  return (
    <div className='flex flex-col container w-[1208px] h-[676px] rounded-2xl mt-[45px] bg-[#F5F5F7] items-center relative overflow-hidden'>
        <div className='flex font-sfpro font-medium text-[64px] text-white leading-[4rem] w-[862px] h-[128px] mt-[48px] text-center z-40'>Гарантируем ответственность на каждом этапе работы</div>
        <div className='flex flex-col font-sfpro font-normal text-[16px] text-white leading-[1.3rem] tracking-[.04em] w-[504px] h-[63px] mt-[24px] text-center z-40'>
            <div>Ваши убытки - это наши финансовые потери.</div>
            <div>Поэтому мы минимизируем вероятность ошибок по нашей вине.</div>
            <div>А если они возникают - признаем и несем ответственность.</div>
        </div>
        <div className='flex container z-40'>
            <div className='flex flex-col rounded-xl bg-white w-[265px] h-[252px] mt-[44px] ml-[45px] shadow-[0px_2.161px_127.704px_0px_rgba(7,22,61,0.12)]'>
                <div className='ml-[23px] mt-[23px]'><Machine /></div>
                <div className='w-[120px] h-[38px] mt-[25px] ml-[23px] font-sfpro font-bold text-[18.692px] leading-[1.168rem]'>Поставляем без задержек</div>
                <div className='w-[200px] h-[90px] mt-[8px] ml-[23px] font-sfpro font-normal text-[14px] text-[#4F4F4F] leading-[1.138rem]'>Мы знаем, насколько для вас важны сроки поставок и поэтому забираем товар с СЦ день в день и отвозим на маркетплейсы ежедневно.</div>
            </div>
            <div className='flex flex-col rounded-xl bg-white w-[265px] h-[252px] mt-[44px] ml-[23px] shadow-[0px_2.161px_127.704px_0px_rgba(7,22,61,0.12)]'>
                <div className='ml-[23px] mt-[23px]'><Downgrade /></div>
                <div className='w-[200px] h-[38px] mt-[25px] ml-[23px] font-sfpro font-bold text-[18.692px] leading-[1.168rem]'>Минимизируем процент возвратов</div>
                <div className='w-[200px] h-[90px] mt-[8px] ml-[23px] font-sfpro font-normal text-[14px] text-[#4F4F4F] leading-[1.138rem]'>Проводим строгую проверку на брак и предпродажную подготовку. Бережно обращаемся с вашим товаром, как со своим собственным.</div>
            </div>
            <div className='flex flex-col rounded-xl bg-white w-[265px] h-[252px] mt-[44px] ml-[23px] shadow-[0px_2.161px_127.704px_0px_rgba(7,22,61,0.12)]'>
                <div className='ml-[23px] mt-[23px]'><Shield /></div>
                <div className='w-[200px] h-[38px] mt-[25px] ml-[23px] font-sfpro font-bold text-[18.692px] leading-[1.168rem]'>Минимизируем процент возвратов</div>
                <div className='w-[220px] h-[90px] mt-[8px] ml-[23px] font-sfpro font-normal text-[14px] text-[#4F4F4F] leading-[1.138rem]'>Работаем по четкому алгоритму. Недосчитали или недовезли - не наш случай.</div>
            </div>
            <div className='flex flex-col rounded-xl bg-white w-[265px] h-[252px] mt-[44px] ml-[23px] shadow-[0px_2.161px_127.704px_0px_rgba(7,22,61,0.12)]'>
                <div className='ml-[23px] mt-[23px]'><Photo /></div>
                <div className='w-[180px] h-[38px] mt-[25px] ml-[23px] font-sfpro font-bold text-[18.692px] leading-[1.168rem]'>Предоставляем видео и фото отчеты</div>
                <div className='w-[200px] h-[108px] mt-[8px] ml-[23px] font-sfpro font-normal text-[14px] text-[#4F4F4F] leading-[1.138rem]'>Снимаем процесс забора и отгрузки, а также обработки товара. У вас всегда есть фото и видео доказательства в случае возникновения спорных ситуаций.</div>
            </div>
        </div>
        <div className='mt-[32px] justify-center z-40'><CalcBtn /></div>
        <div className='flex absolute -left-[100px] z-0 blur-[200px]'><img src='/images/bigPink.png' alt='yellowPink' /></div>
        <div className='flex absolute -right-[70px] blur-[300px]'><img src="/images/bigYellow.png" alt="bigYellow" /></div>
    </div>
  )
};

export default Warranty;
