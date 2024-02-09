import React from 'react'

const Second = () => {
  return (
    <div className='flex flex-col mt-[17px] ml-[28px]'>
        <div className='flex flex-row font-lato text-[13px] font-bold leading-[1.376rem]'>
            <div className=' bg-gradient-to-r from-[#EB1988] to-[#005AF9] inline-block text-transparent bg-clip-text'>Шаг 2</div>
            <div className='text-[#828282]'>&nbsp;&nbsp;Заполнять необязательно</div>
        </div>
        <div className='flex flex-col items-start mt-[18px]'>
            <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>Проверка на брак</div>
            <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[8px]'>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Визуальная</button>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Детальная</button>
            </div>
        </div>
        <div className='flex flex-col items-start mt-[10px]'>
            <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>Упаковка</div>
            <div className='grid grid-cols-3 w-[336px] mt-[6px] gap-x-[8px] gap-y-[8px]'>
                <button className='flex w-[164px] h-[42px]  rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>ЗИП-пакет</button>
                <button className='flex w-[164px] h-[42px]  rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white ml-[57px]'>БОПП-пакет</button>
                <button className='flex w-[336px] h-[42px] col-span-3 rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Воздушно-пузырчатая плёнка</button>
                <button className='flex w-[164px] h-[42px]  rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Запаянный рукав</button>
                <button className='flex w-[164px] h-[42px]  rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white ml-[57px]'>Другое</button>
            </div>
        </div>
        <div className='flex flex-col items-start mt-[10px]'>
            <div className='font-lato font-bold text-[13.005px] leading-[1rem]'>Вложение (подарок, визитка, др.)</div>
            <div className='flex w-[336px] h-[43px] mt-[px] space-x-[8px] mt-[8px]'>
                <button className='flex w-[164px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Да</button>
                <button className='flex w-[164px] h-[42px] bg-[#FAFAFA] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Нет</button>
            </div>
        </div>
        <div className='flex flex-col items-start mt-[10px]'>
            <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>Прикрепить бирку</div>
            <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[8px]'>
                <button className='flex w-[164px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Да</button>
                <button className='flex w-[164px] h-[42px] bg-[#FAFAFA] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Нет</button>
            </div>
        </div>
    </div>
  )
};

export default Second;
