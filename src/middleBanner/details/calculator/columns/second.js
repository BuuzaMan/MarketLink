import React from 'react'

const Second = () => {
  return (
    <div className='flex flex-col desktop:mt-[30px] desktop:ml-[25.16px] mobile:mt-[28px]'>
        <div className='flex flex-col items-start'>
            <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>Маркировка</div>
            <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[8px]'>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Одинарная</button>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Двойная</button>
            </div>
        </div>
        <div className='flex flex-col items-start mt-[24px]'>
            <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>Проверка на брак</div>
            <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[8px]'>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Визуальная</button>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Двойная</button>
            </div>
        </div>
        <div className='flex flex-col items-start mt-[24px]'>
            <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>Упаковка</div>
            <div className='grid grid-cols-3 w-[336px] mt-[6px] gap-x-[8px] gap-y-[8px]'>
                <button className='flex w-[164px] h-[42px]  rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>ЗИП-пакет</button>
                <button className='flex w-[164px] h-[42px]  rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white ml-[57px]'>БОПП-пакет</button>
                <button className='flex w-[336px] h-[42px] col-span-3 rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Воздушно-пузырчатая плёнка</button>
                <button className='flex w-[164px] h-[42px]  rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Стретч</button>
                <button className='flex w-[164px] h-[42px]  rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white ml-[57px]'>Другое</button>
            </div>
        </div>
    </div>
  )
};

export default Second;
