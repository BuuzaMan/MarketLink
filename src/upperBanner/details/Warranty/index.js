import React from 'react'
import Sign from './details/sign';
import SecondSign from './details/secondSign';
import First from './details/first';
import Second from './details/second';
import Third from './details/third';
import Fourth from './details/fourth';
import Button from './details/button'
import PinkGlow from '../../../svg/pinkGlow';
import BlueGlow from '../../../svg/blueGlow';
import YellowGlow from '../../../svg/yellowGlow';

let  Warranty = () => {
  return (
    <div className='flex flex-col container desktop:w-[1208px] desktop:h-[676px] desktop:rounded-2xl desktop:mt-[45px] mobile:w-[345px] mobile:h-[1600px] mobile:rounded-2xl mobile:mt-[80px] bg-white items-center relative overflow-hidden'>
        <Sign />
        <SecondSign />
        <div className='flex desktop:flex-row mobile:flex mobile:flex-col desktop:w-[1208px] mobile:w-[345px] desktop:ml-[80px] mobile:ml-[80px] desktop:mt-[44px] mobile:mt-[43px] desktop:gap-x-[23px] mobile:gap-y-[20px] container z-40'>
            <First />
            <Second />
            <Third />
            <Fourth />
        </div>
        <Button />
        <PinkGlow />
        <BlueGlow />
        <YellowGlow />
    </div>
  )
};

export default Warranty;
