import React from 'react'
import Machine from '../../svg/machine';
import Downgrade from '../../svg/downgrade';
import Shield from '../../svg/shield';
import Photo from '../../svg/photo';
import CalcBtn from '../../calcCostBtn';

let  Warranty = () => {
  return (
    <div className='flex flex-col container desktop:w-[1208px] desktop:h-[676px] desktop:rounded-2xl desktop:mt-[45px] mobile:w-[345px] mobile:h-[1600px] mobile:rounded-2xl mobile:mt-[80px] bg-red-200 items-center relative overflow-hidden'>
        <div className='flex font-sfpro font-medium desktop:text-[64px] mobile:text-[40px] text-white desktop:leading-[4rem] mobile:leading-[3rem] desktop:w-[862px] desktop:h-[128px] mobile:w-[324px] mobile:h-[200px] desktop:mt-[48px] mobile:mt-[25px] text-center z-40'>Гарантируем ответственность на каждом этапе работы</div>
        <div className='flex flex-col items-center font-sfpro font-normal text-white text-center tracking-[.04em] leading-[1.3rem] desktop:w-[504px] desktop:h-[63px] mobile:w-[290px] mobile:h-[120px] desktop:mt-[24px] mobile:mt-[20px] z-40'>
            <p>Ваши убытки - это наши финансовые потери.</p>
            <p>Поэтому мы минимизируем вероятность ошибок по нашей вине.</p>
            <p>А если они возникают - признаем и несем ответственность.</p>
        </div>
        <div className='flex desktop:flex-row mobile:flex mobile:flex-col desktop:w-[1208px] mobile:w-[345px] desktop:ml-[80px] mobile:ml-[80px] desktop:mt-[44px] mobile:mt-[43px] desktop:gap-x-[23px] mobile:gap-y-[20px] container z-40'>
            <div className='flex flex-col rounded-xl bg-white w-[265px] h-[252px] shadow-[0px_2.161px_127.704px_0px_rgba(7,22,61,0.12)]'>
                <div className='ml-[23px] mt-[23px]'><Machine /></div>
                <div className='w-[120px] h-[38px] mt-[25px] ml-[23px] font-sfpro font-bold text-[18.692px] leading-[1.168rem]'>Поставляем без задержек</div>
                <div className='w-[200px] h-[90px] mt-[8px] ml-[23px] font-sfpro font-normal text-[14px] text-[#4F4F4F] leading-[1.138rem]'>Мы знаем, насколько для вас важны сроки поставок и поэтому забираем товар с СЦ день в день и отвозим на маркетплейсы ежедневно.</div>
            </div>
            <div className='flex flex-col rounded-xl bg-white w-[265px] h-[252px] shadow-[0px_2.161px_127.704px_0px_rgba(7,22,61,0.12)]'>
                <div className='ml-[23px] mt-[23px]'><Downgrade /></div>
                <div className='w-[200px] h-[38px] mt-[25px] ml-[23px] font-sfpro font-bold text-[18.692px] leading-[1.168rem]'>Минимизируем процент возвратов</div>
                <div className='w-[200px] h-[90px] mt-[8px] ml-[23px] font-sfpro font-normal text-[14px] text-[#4F4F4F] leading-[1.138rem]'>Проводим строгую проверку на брак и предпродажную подготовку. Бережно обращаемся с вашим товаром, как со своим собственным.</div>
            </div>
            <div className='flex flex-col rounded-xl bg-white w-[265px] h-[252px] shadow-[0px_2.161px_127.704px_0px_rgba(7,22,61,0.12)]'>
                <div className='ml-[23px] mt-[23px]'><Shield /></div>
                <div className='w-[200px] h-[38px] mt-[25px] ml-[23px] font-sfpro font-bold text-[18.692px] leading-[1.168rem]'>Минимизируем процент возвратов</div>
                <div className='w-[220px] h-[90px] mt-[8px] ml-[23px] font-sfpro font-normal text-[14px] text-[#4F4F4F] leading-[1.138rem]'>Работаем по четкому алгоритму. Недосчитали или недовезли - не наш случай.</div>
            </div>
            <div className='flex flex-col rounded-xl bg-white w-[265px] h-[252px] shadow-[0px_2.161px_127.704px_0px_rgba(7,22,61,0.12)]'>
                <div className='ml-[23px] mt-[23px]'><Photo /></div>
                <div className='w-[180px] h-[38px] mt-[25px] ml-[23px] font-sfpro font-bold text-[18.692px] leading-[1.168rem]'>Предоставляем видео и фото отчеты</div>
                <div className='w-[200px] h-[108px] mt-[8px] ml-[23px] font-sfpro font-normal text-[14px] text-[#4F4F4F] leading-[1.138rem]'>Снимаем процесс забора и отгрузки, а также обработки товара. У вас всегда есть фото и видео доказательства в случае возникновения спорных ситуаций.</div>
            </div>
        </div>
        <div className='desktop:mt-[32px] mobile:mt-[30px] justify-center z-40'><CalcBtn /></div>
        <div className='flex absolute -left-[100px] z-0 blur-[200px]'><img src='/images/bigPink.png' alt='yellowPink' /></div>
        <div className='flex absolute -right-[70px] blur-[300px]'><img src="/images/bigYellow.png" alt="bigYellow" /></div>
    </div>
  )
};

export default Warranty;
