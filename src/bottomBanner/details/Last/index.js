import React from 'react'
import Mosaic from './details/mosaic';
import Block from './details/block';


const Last = () => {
  return (
    <div className='desktop:w-[1208px] mobile:w-[386px] desktop:h-[564px] mobile:h-[1226px] desktop:mt-[120px] mobile:mt-[80px] items-center'>
        <div className='flex desktop:flex-row mobile:flex-col items-center font-sfpro desktop:gap-x-6 mobile:gap-y-5'>
            <Mosaic />
            <Block />
        </div>
        <div className='desktop:hidden tablet:hidden mobile:block ml-[76px] mt-[30px]'><button className='w-[234px] h-[56px] rounded-[229px] bg-black text-white text-[16px] font-bold leading-[1.3rem]'>Рассчитать стоимость</button></div>
     </div>
  )
};

export default Last;