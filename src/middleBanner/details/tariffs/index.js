import React from 'react'

let Tariffs = () => {
  return (
    <div className='flex flex-col w-[1208px] items-center mt-[120px]'>
        <div className='w-[971px] h-[128px]'>
            <div className='font-sfpro font-medium text-[64px] leading-[4rem] -tracking-[.06em] text-center'>Выгодные тарифы</div>
            <div className='font-sfpro font-medium text-[64px] leading-[4rem] -tracking-[.06em] text-center'>оптимизации вашего бизнеса</div>
        </div>
        <div className='flex mt-[40.01px]'>
            <div></div>
            <div className='flex flex-col w-[592px] h-[632px] rounded-2xl shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
                <div className='w-[512px] rounded-xl mt-[35px] ml-[40px]'><img src='images/map.png' alt='map' className='rounded-xl'/></div>
                <div className='mt-[32px] ml-[40px] space-y-[8px]'>
                    <div className='font-sfpro font-bold text-[24px] leading-[1.95rem] w-[498px]'>Минимальные тарифы на забор и поставку.</div>
                    <div className='font-sfpro font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] w-[507px]'>Находимся на 8 км МКАД в непосредственной близости от ТК Садовод, СЦ Южные Ворота, складов Коледино и Электросталь.</div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Tariffs;
