import React from 'react'
import Calculator from './details/calculator/index';
import FullFilment from './details/full-filment';
import Process from './details/Process';
import Tariffs from './details/tariffs';
import Logistics from './details/logistics';

const MiddleBanner = () => {
  return (
    <div className='flex flex-col container w-[1208px] items-center mx-auto'>
        <Calculator />
        <FullFilment />
        <Process />
        <Tariffs />
        <Logistics />
    </div>
  )
};

export default MiddleBanner;
