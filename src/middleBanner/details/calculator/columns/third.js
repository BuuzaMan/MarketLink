import React from 'react'
import Warehouse from '../details/warehouse';

const Third = () => {
  return (
    <div className='flex flex-col mt-[30px] ml-[32px]'>
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
        <div><Warehouse /></div>
    </div>
  )
};

export default Third;
