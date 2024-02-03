import React from 'react'
import Receive from './details/receive';
import Photo from './details/photo';
import Buyout from './details/buyout';
import Card from './details/card';

const Work = () => {
  return (
    <div className='flex desktop:w-[1208px] mobile:w-[346px] mobile:overflow-x-scroll mobile:scrollbar-hide desktop:gap-x-6 mobile:gap-x-[18px] desktop:mt-[24px] mobile:mt-[20px]'>
        <Receive />
        <Photo />
        <Buyout />
        <Card />
    </div>
  )
};

export default Work;
