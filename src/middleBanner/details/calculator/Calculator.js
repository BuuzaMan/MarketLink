import React from 'react'
import First from './columns/first';
import Second from './columns/second';
import Third from './columns/third';
import Button from '../button';

let Calculator = () => {
  return (
    <div className='flex container flex-col w-[1198px] h-[578px] mt-[120px] text-center items-center'>
        <div className='flex font-sfpro font-medium text-[64px] leading-[4rem]'>Рассчитать стоимость поставки</div>
        <div className='flex flex-col items-start w-[1198px] h-[578px] rounded-2xl bg-red-100 mt-[40px] ml-[121px]'>
          <div className='flex flex-row rounded-xl bg-[#FEFEFE] w-[1145px] h-[450px] mt-[25px] ml-[27px]'>
            <First />
            <Second />
            <Third />
          </div>
          <div className='flex flex-row'>
            <div className='flex font-sfpro mt-[18px] ml-[35px]'>
              <div className='text-[40px] font-normal leading-[5.6rem]'>от&nbsp;</div>
              <div className='text-[64px] font-bold leading-[4rem]'>44,990₽</div>
            </div>
            <div className='w-[157px] h-[52px] ml-[27px] font-sfpro text-[17.438px] font-medium leading-[1.625rem] text-left mt-[24px]'>Примерная стоимость без НДС</div>
            <div className='mt-[20px] ml-[395px]'><Button /></div>
          </div>
        </div>
    </div>
  )
};

export default Calculator;
