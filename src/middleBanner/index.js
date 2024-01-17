import React from 'react'
import Calculator from './details/calculator/Calculator';
import FullFilment from './details/full-filment';
import Process from './details/Process';
import Tariffs from './details/tariffs';

const MiddleBanner = () => {
  return (
    <div className='flex flex-col container w-[1208px] items-center mx-auto'>
        <Calculator />
        <FullFilment />
        <Process />
        <Tariffs />
    </div>
  )
};

export default MiddleBanner;
