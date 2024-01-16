import React from 'react'
import Calculator from './details/calculator/Calculator';
import FullFilment from './details/full-filment';
import Process from './details/Process';

const MiddleBanner = () => {
  return (
    <div className='flex flex-col container w-[1198px] items-center mx-auto'>
        <Calculator />
        <FullFilment />
        <Process />
    </div>
  )
};

export default MiddleBanner;
