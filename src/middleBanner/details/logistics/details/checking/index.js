import React from 'react'
import First from './first';
import Second from './second';

const Checking = () => {
  return (
    <div className='flex desktop:flex-row mobile:flex-col desktop:w-[1208px] mobile:w-[386px] desktop:mt-[24px] mobile:mt-[20px] desktop:gap-x-[24px] mobile:gap-y-[20px] items-center'>
        <First />
        <Second />
    </div>
  )
};

export default Checking;

