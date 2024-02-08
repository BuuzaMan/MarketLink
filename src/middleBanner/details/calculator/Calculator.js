import React from 'react'
import First from './details/first';
import Second from './details/second';
import Third from './details/third';
import Button from '../button';
import BigBlueEl from '../../../svg/bigBlueEl';
import PinkBig from '../../../svg/pinkBig';



let Calculator = () => {
  return (
    <div className='flex container flex-col desktop:w-[1198px] desktop:h-[682px] mobile:w-[386px] mobile:h-[1650px] desktop:mt-[120px] mobile:mt-[80px] items-center text-center desktop:rounded-none mobile:rounded-[12px] desktop:bg-transparent mobile:bg-white'>
        <div className='flex desktop:w-[900px] mobile:w-[300px] desktop:h-[64px] mobile:h-[120px desktop:mt-0 mobile:mt-[38px] font-sfpro font-medium desktop:text-[64px] mobile:text-[40px] desktop:leading-[4rem] mobile:leading-[2.5rem] desktop:-tracking-[.08em] mobile:-tracking-[.05em]'>Рассчитать стоимость поставки</div>
        <div className='flex flex-col relative overflow-hidden items-start desktop:w-[1198px] desktop:h-[578px] mobile:w-[386px] rounded-2xl desktop:mt-[40px] mobile:mt-[52px]'>
          <div className='flex desktop:flex-row mobile:flex-col desktop:rounded-xl mobile:rounded-none bg-[#FEFEFE] desktop:w-[1147px] mobile:w-[325px] desktop:h-[450px] mobile:h-[1147px] mt-[25px] ml-[27px] z-40 #FEFEFE'>
            <First />
            <Second />
            <Third />
          </div>
          <div className='flex desktop:flex-row mobile:flex-col z-40'>
            <div className='flex font-sfpro desktop:mt-[18px] desktop:ml-[35px] mobile:mt-[21.35px] mobile:ml-[55px]'>
              <div className='text-[40px] font-normal leading-[5.6rem] -tracking-[.05em]'>от&nbsp;</div>
              <div className='text-[64px] font-bold leading-[4rem] -tracking-[.08em]'>44,990₽</div>
            </div>
            <div className='desktop:w-[157px] desktop:h-[40px] mobile:w-[252px] mobile:h-[26px] desktop:mt-[24px] desktop:ml-[27px] mobile:ml-[77px] font-sfpro text-[17.438px] font-medium leading-[1.625rem] text-left z-40'>Примерная стоимость без НДС</div>
            <div className='desktop:mt-[20px] desktop:ml-[395px] mobile:mt-[28px] mobile:ml-[70px] z-40'><Button /></div>
          </div>
          <div className='flex absolute z-0 top-[207px] left-[173px] blur-[600px] desktop:flex mobile:hidden'><BigBlueEl /></div>
          <div className='flex absolute z-0 top-[200px] left-[200px] blur-[200px] desktop:flex mobile:hidden'><PinkBig /></div>
        </div>
    </div>
  )
};

export default Calculator;
