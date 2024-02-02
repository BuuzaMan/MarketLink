import React from 'react'
import Drop from './details/drop';
import Package from './details/package';
import Price from './details/price';
import Maps from './details/maps';

let Tariffs = () => {
  return (
    <div className='flex flex-col desktop:w-[1208px] mobile:w-[386px] items-center desktop:mt-[120px] mobile:mt-[80px]'>
        <div className='desktop:w-[971px] mobile:w-[346px] desktop:h-[128px] mobile:h-[120px]'>
            <div className='font-sfpro font-medium desktop:text-[64px] mobile:text-[40px] desktop:leading-[4rem] mobile:leading-[2.5rem] desktop:-tracking-[.02em] mobile:-tracking-[.02em] text-center'>Выгодные тарифы</div>
            <div className='font-sfpro font-medium desktop:text-[64px] mobile:text-[40px] desktop:leading-[4rem] mobile:leading-[2.5rem] desktop:-tracking-[.02em] mobile:-tracking-[.02em] text-center'>оптимизации вашего бизнеса</div>
        </div>
        <div className='flex desktop:flex-row mobile:flex-col mt-[40px] desktop:space-x-[24px] mobile:gap-y-[20px] items-center'>
            <div>
                <div className='flex desktop:flex-row mobile:flex-col desktop:gap-x-[19px] mobile:gap-y-[20px] items-center'>
                    <Drop />
                    <Package />
                </div>
                <Price />
            </div>
            <div className='flex flex-col desktop:w-[592px] mobile:w-[346px] desktop:h-[632px] mobile:h-[515px] rounded-2xl bg-[#FFFFFF]'>
                <Maps />
                <div className='desktop:mt-[32px] mobile:mt-[22.5px] desktop:ml-[40px] mobile:ml-[19px] space-y-[8px]'>
                    <div className='font-sfpro font-bold desktop:text-[24px] mobile:text-[32px] leading-[1.95rem] desktop:w-[498px] mobile:w-[260px]'>Минимальные тарифы на забор и поставку</div>
                    <div className='font-sfpro font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] desktop:w-[507px] mobile:w-[296px]'>Находимся на 8 км МКАД в непосредственной близости от ТК Садовод, СЦ Южные Ворота, складов Коледино и Электросталь.</div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Tariffs;
