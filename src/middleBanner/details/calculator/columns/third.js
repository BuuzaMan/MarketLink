import React from 'react'

const Third = () => {
  return (
    <div className='flex flex-col desktop:mt-[30px] desktop:ml-[32px] mobile:mt-[28px]'>
        <div className='flex flex-col items-start'>
            <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>Вложение</div>
            <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[8px]'>
                <button className='flex w-[164px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Подарки</button>
                <button className='flex w-[164px] h-[42px] bg-[#FAFAFA] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Визитки</button>
            </div>
        </div>
        <div className='flex flex-col items-start mt-[24px]'>
            <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>Прикрепить бирку</div>
            <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[8px]'>
                <button className='flex w-[164px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Ваш бренд</button>
                <button className='flex w-[164px] h-[42px] bg-[#FAFAFA] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Предоставляем мы</button>
            </div>
        </div>
        <div className='flex flex-col items-start mt-[24px]'>
            <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>На какой маркетплейс планируется отгрузка</div>
            <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[10px]'>
                <button className='flex w-[105px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>ВБ</button>
                <button className='flex w-[105px] h-[42px] bg-[#FAFAFA] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Озон</button>
                <button className='flex w-[105px] h-[42px] bg-[#FAFAFA] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Яндекс</button>
            </div>
        </div>
        <div className='flex flex-col items-start mt-[24px]'>
            <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>На какой склад планируется отгрузка</div>
            <div className='flex flex-wrap w-[336px] h-[43px] mt-[8px] gap-x-[8px] gap-y-[8px]'>
                <button className='flex w-[97px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Коледино</button>
                <button className='flex w-[130px] h-[42px] bg-[#FAFAFA] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Электросталь</button>
                <button className='flex w-[93px] h-[42px] bg-[#FAFAFA] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Алексин</button>
                <button className='flex w-[77px] h-[42px] bg-[#FAFAFA] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Казань</button>
                <button className='flex w-[130px] h-[42px] bg-[#FAFAFA] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Уткина Заводь</button>
            </div>
        </div>
    </div>
  )
};

export default Third;
