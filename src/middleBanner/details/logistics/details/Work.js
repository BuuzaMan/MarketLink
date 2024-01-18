import React from 'react'
import GradientBox from '../../../../svg/gradientBox';
import Camera from '../../../../svg/camera';
import LoadBox from '../../../../svg/loadbox';
import Cards from '../../../../svg/cards';

const Work = () => {
  return (
    <div className='grid grid-cols-4 w-[1208px] h-[356px] mt-[24px] gap-x-6'>
        <div className='w-[284px] h-[356px] rounded-[12.84px] shadow-[0px_1px_10px_0px_rgba(7,22,61,0.12)]'>
            <div className='mt-[31px] ml-[32px]'><GradientBox /></div>
            <div className='mt-[24px] ml-[32px] font-sfpro'>
                <div className='text-[24px] font-bold leading-[1.5rem] -tracking-[.03em]'>Прием и обработка возвратов</div>
                <div className='font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] w-[220px]'>
                    <div className='mt-[16px]'>Заберем возвраты, проверим на брак, переупакуем и подготовим к продаже.</div>
                    <div className='mt-[20px]'>Отправим на склад для следующей поставки.</div>
                </div>
            </div>
        </div>
        <div className='w-[284px] h-[356px] rounded-[12.84px] shadow-[0px_1px_10px_0px_rgba(7,22,61,0.12)]'>
            <div className='mt-[31px] ml-[32px]'><Camera /></div>
            <div className='mt-[24px] ml-[32px] font-sfpro'>
                <div className='text-[24px] font-bold leading-[1.5rem] -tracking-[.03em]'>Организуем фотосессию</div>
                <div className='font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] w-[220px]'>
                    <div className='mt-[16px]'>Качественная фотосъемка с моделями или предметная съемка.</div>
                    <div className='mt-[20px]'>Сотрудничаем с проверенными фотостудиями и фотографами Москвы.</div>
                </div>
            </div>
        </div>
        <div className='w-[284px] h-[356px] rounded-[12.84px] shadow-[0px_1px_10px_0px_rgba(7,22,61,0.12)]'>
            <div className='mt-[31px] ml-[32px]'><LoadBox /></div>
            <div className='mt-[24px] ml-[32px] font-sfpro'>
                <div className='text-[24px] font-bold leading-[1.5rem] -tracking-[.03em] w-[150px]'>Забор самовыкупов</div>
                <div className='font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] w-[220px]'>
                    <div className='mt-[16px]'>Получим ваш товар на ПВЗ.</div>
                    <div className='mt-[20px]'>Переклеим КИЗы и подготовим к новой поставке.</div>
                </div>
            </div>
        </div>
        <div className='w-[284px] h-[356px] rounded-[12.84px] shadow-[0px_1px_10px_0px_rgba(7,22,61,0.12)]'>
            <div className='mt-[31px] ml-[32px]'><Cards /></div>
            <div className='mt-[24px] ml-[32px] font-sfpro'>
                <div className='text-[24px] font-bold leading-[1.5rem] -tracking-[.03em] w-[220px]'>Оформление карточки товара</div>
                <div className='font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] w-[220px]'>
                    <div className='mt-[16px]'>Оформим листинг и описание.</div>
                    <div className='mt-[20px]'>Оптимизируем для повышения позиций карточки и роста конверсии в заказ.</div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Work;
