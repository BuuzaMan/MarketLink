import React from 'react'
import Mosaic from './details/mosaic';
import Block from './details/block';


const Last = () => {
  return (
    <div className='grid desktop:grid-cols-2 mobile:flex-col desktop:w-[1208px] desktop:h-[564px] mobile:w-[386px] mobile:h-[1226px] desktop:mt-[120px] mobile:mt-[80px] font-sfpro desktop:gap-x-6 mobile:gap-y-5 items-center'>
        <Mosaic />
        <Block />
    </div>
  )
};

export default Last;