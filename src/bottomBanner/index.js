import React from 'react'
import Individual from './details/Individual/index.js';
import Cargo from './details/Cargo/index.js';
import Reviews from './details/Reviews/index.js';
import Answers from './details/Answers/index.js';
import Last from './details/Last/index.js';

const BottomBanner = () => {
  return (
    <div className='flex flex-col container w-[1208px] items-center mx-auto mt-[120px]'>
        <Individual />
        <Cargo />
        <Reviews />
        <Answers />
        <Last />
    </div>
  )
};

export default BottomBanner;
