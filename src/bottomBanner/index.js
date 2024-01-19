import React from 'react'
import Individual from './details/Individual/index.js';
import Cargo from './details/Cargo/index.js';

const BottomBanner = () => {
  return (
    <div className='flex flex-col container w-[1208px] items-center mx-auto mt-[120px]'>
        <Individual />
        <Cargo />
    </div>
  )
};

export default BottomBanner;
