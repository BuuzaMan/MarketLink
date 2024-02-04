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
    <div className='w-[592px] h-[756px] rounded-2xl relative overflow-hidden bg-[#FFFFFF]'>
        <div className='flex flex-col mt-[31px] ml-[41px]'>
            <div className='w-[411px] h-[96px] font-sfpro font-medium text-[48px] leading-[3rem] -tracking-[.06em]'>Калькулятор доставки из Китая</div>
            <Speed />
            <Information />
            <CostType />
            <Estimated />
            <CostButton />
            <div className='absolute top-[450px] -left-[300px] blur-[237px] z-0'><BigYellowCircle /></div>
            <div className='absolute top-[500px] left-[120px] blur-[237px] z-10'><PinkCircle /></div>
            <div className='absolute z-0 top-[64px] left-[1px] z-0'><BigBlueCircle /></div>
        </div>
    </div>
  )
}

export default DeliveryCalc;
