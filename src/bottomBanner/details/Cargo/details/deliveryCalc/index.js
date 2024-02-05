import React from 'react'
import CostButton from './details/costButton';
import BigYellowCircle from '../../../../../svg/BigYellowCircle';
import PinkCircle from '../../../../../svg/pinkCircle';
import BigBlueCircle from '../../../../../svg/bigBlueCircle';
import Information from './details/information';
import CostType from './details/costType';
import Estimated from './details/estimated';
import Speed from './details/speed';

const DeliveryCalc = () => {
  return (
    <div className='desktop:w-[592px] mobile:w-[346px] desktop:h-[756px] mobile:h-[530px] desktop:rounded-2xl mobile:rounded-[9.351px] relative overflow-hidden bg-[#FFFFFF]'>
        <div className='flex flex-col desktop:mt-[31px] mobile:mt-[21px] desktop:ml-[41px] mobile:ml-[24px]'>
            <div className='desktop:w-[411px] mobile:w-[271px] desktop:h-[96px] mobile:h-[64px] font-sfpro font-medium desktop:text-[48px] mobile:text-[32px] desktop:leading-[3rem] mobile:leading-[2rem] desktop:-tracking-[.06em] mobile:-tracking-[.02em]'>Калькулятор доставки из Китая</div>
            <Speed />
            <Information />
            <CostType />
            <Estimated />
            <CostButton />
            <div className='absolute desktop:top-[450px] desktop:-left-[300px] blur-[237px] z-0'><BigYellowCircle /></div>
            <div className='absolute desktop:top-[500px] desktop:left-[120px] blur-[237px] z-10'><PinkCircle /></div>
            <div className='absolute z-0 desktop:top-[64px] desktop:left-[1px] z-0'><BigBlueCircle /></div>
        </div>
    </div>
  )
}

export default DeliveryCalc;
