import React from 'react'
import Calculator from './details/calculator/Calculator';
import FullFilment from './details/full-filment';
import Process from './details/Process';
import Tariffs from './details/tariffs';
import Logistics from './details/logistics';

const MiddleBanner = () => {
  return (
    <div className='flex flex-col container desktop:w-[1208px] mobile:w-[386px] items-center mx-auto'>
        <Calculator />
        <FullFilment />
        <Process />
        <Tariffs />
        <Logistics />
    </div>
  )
};

export default MiddleBanner;
