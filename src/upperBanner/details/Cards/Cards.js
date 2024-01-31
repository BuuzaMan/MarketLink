import React from 'react'
import Service from './details/Sevice';
import Manager from './details/manager';
import Everyday from './details/everyday';
import FBO from './details/FBO';
import Supply from './details/Supply';

let Cards = () => {
  return (
    <div className='flex flex-col desktop:h-[1053px] desktop:w-[1208px] mobile:w-[345px] desktop:gap-y-[22px] mobile:gap-y-[20px] desktop:mt-[79px] mobile:mt-[30px]'>
      <div className='desktop:flex desktop:flex-row mobile:flex mobile:flex-col desktop:gap-x-6 mobile:gap-y-[20px] items-center'>
        <Service />
        <Manager />
      </div>
      <div className='desktop:flex desktop:flex-row mobile:flex mobile:flex-col desktop:gap-x-6 mobile:gap-y-[20px]'> 
        <Everyday />
        <FBO />
        <Supply />
      </div>
    </div>
  )
};

export default Cards;
