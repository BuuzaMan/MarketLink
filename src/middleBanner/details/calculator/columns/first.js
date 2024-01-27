import React from 'react'

const First = () => {
  return (
    <div className='flex flex-col mt-[30px] ml-[37px]'>
        <div>
            <div className='flex font-lato font-bold text-[13px] leading-[1.118rem]'>Количество единиц товара</div>
            <div className='flex mt-[8px]'>
            <input
                type='text'
                className='w-[336px] h-[42.2px] rounded-md border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-4 font-lato text-[14.63px] leading-[1.321rem] text-[#262C31]'
                placeholder='1000'
            />
            </div>
        </div>
        <div className='mt-[24px] w-[336px]'>
            <div className='flex font-lato font-bold text-[13px] leading-[1.118rem]'>Укажите параметры товара, см</div>
            <div className='flex w-[336px] justify-between mt-[8px]'>
                <input
                    type='text'
                    className='w-[100px] h-[42.2px] rounded-md border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-5 text-[14.63px] leading-[1.321rem] text-[#262C31]'
                    placeholder='Длина'
                />
                <input
                    type='text'
                    className='w-[100px] h-[42.2px] rounded-md border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-5 text-[14.63px] leading-[1.321rem] text-[#262C31]'
                    placeholder='Высота'
                />
                <input
                    type='text'
                    className='w-[100px] h-[42.2px] rounded-md border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-5 text-[14.63px] leading-[1.321rem] text-[#262C31]'
                    placeholder='Ширина'
            />
            </div>
        </div>
        <div className='mt-[24px]'>
            <div className='flex font-lato font-bold text-[13px] leading-[1.118rem]'>Потребуется ли забор товара(Карго/Рынок)?</div>
            <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[8px]'>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Да</button>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Нет</button>
            </div>
        </div>
        <div>
            <div className='flex mt-[24px]'>
                <div className='font-lato text-[13.005px] font-bold leading-[1.118rem]'>Объем груза&nbsp;</div>
                <div className='font-lato font-normal italic text-[13.005px] leading-[1.118rem]'>(Можно узнать из накладной)</div>
            </div>
            <div className='flex mt-[8px] space-x-[8px]'>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] leading-[1.321rem] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>До 1м³</button>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Более 1м³</button>
            </div>
        </div>
        <div className='flex flex-col mt-[24px] items-start'>
            <div className='font-lato text-[13.005px] text-[#5C6770]'>Товар уже промаркирован?</div>
            <div className='flex mt-[8px] space-x-[8px]'>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] leading-[1.321rem] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Да</button>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Нет</button>
            </div>
        </div>
    </div>
    )
};

export default First;
