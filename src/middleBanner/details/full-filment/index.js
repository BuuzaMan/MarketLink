import React from 'react'
import Organization from './details/organization';
import PersonalManager from './details/personalManager';
import People from './details/people';
import MainWriting from './details/mainWriting';

const FullFilment = () => {
  return (
    <div className='flex flex-col container desktop:w-[1208px] mobile:w-[386px] desktop:mt-[130px] mobile:mt-[80px] mx-auto items-center'>
        <MainWriting />
        <div className='flex flex-col desktop:w-[1208px] mobile:w-[386px] desktop:h-[1183px] mobile:h-[px] desktop:mt-[40px] mobile:mt-[30px] items-center'>
            <div className='flex desktop:flex-row mobile:flex-col mobile:space-y-[20px] items-center'>
                <Organization />
                <PersonalManager />
            </div>
            <People />
        </div>
    </div>
  )
};

export default FullFilment;
