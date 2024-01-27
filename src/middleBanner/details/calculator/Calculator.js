import React from 'react'
import First from './columns/first';
import Second from './columns/second';
import Third from './columns/third';
import Button from '../button';
import BigBlueEl from '../../../svg/bigBlueEl';
import PinkBig from '../../../svg/pinkBig';



let Calculator = () => {
  return (
    <div className='flex container flex-col w-[1198px] mt-[120px] mx-auto items-center '>
        <div className='flex font-sfpro font-medium text-[64px] leading-[4rem]'>Рассчитать стоимость поставки</div>
        <div className='flex flex-col relative overflow-hidden items-start w-[1198px] h-[650px] rounded-2xl mt-[40px]'>
          <div className='flex flex-row rounded-xl bg-[#FEFEFE] w-[1145px] h-[500px] mt-[25px] ml-[27px] z-40 #FEFEFE'>
            <First />
            <Second />
            <Third />
          </div>
          <div className='flex flex-row z-40 mt-[10px]'>
            <div className='flex font-sfpro mt-[18px] ml-[35px]'>
              <div className='text-[40px] font-normal leading-[5.6rem]'>от&nbsp;</div>
              <div className='text-[64px] font-bold leading-[4rem]'>44,990₽</div>
            </div>
            <div className='w-[157px] h-[52px] ml-[27px] font-sfpro text-[17.438px] font-medium leading-[1.625rem] text-left mt-[24px] z-40'>Примерная стоимость без НДС</div>
            <div className='mt-[20px] ml-[395px] z-40'><Button /></div>
          </div>
          <div className='flex absolute z-0 top-[207px] left-[173px] blur-[800px]'><BigBlueEl /></div>
          <div className='flex absolute z-20 top-[200px] left-[200px] blur-[300px]'><PinkBig /></div>
        </div>
    </div>
  )
};

export default Calculator;
