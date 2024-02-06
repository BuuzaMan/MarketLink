import React from 'react'
import CostButton from './details/costButton';
import BigYellowCircle from '../../../../../svg/BigYellowCircle';
import PinkCircle from '../../../../../svg/pinkCircle';
import Information from './details/information';
import CostType from './details/costType';
import Estimated from './details/estimated';
import Speed from './details/speed';
import Blue316 from '../../../../../svg/blue316';

const DeliveryCalc = () => {
  return (
    <div className='desktop:w-[592px] mobile:w-[346px] desktop:h-[756px] mobile:h-[480px] desktop:rounded-2xl mobile:rounded-[9.351px] relative overflow-hidden bg-[#FFFFFF]'>
        <div className='flex flex-col desktop:mt-[31px] mobile:mt-[21px] desktop:ml-[41px] mobile:ml-[24px]'>
            <div className='desktop:w-[411px] mobile:w-[271px] desktop:h-[96px] mobile:h-[64px] font-sfpro font-medium desktop:text-[48px] mobile:text-[32px] desktop:leading-[3rem] mobile:leading-[2rem] desktop:-tracking-[.06em] mobile:-tracking-[.02em] z-40'>Калькулятор доставки из Китая</div>
            <Speed />
            <Information />
            <CostType />
            <Estimated />
            <CostButton />
            <div className='absolute desktop:top-[800px] desktop:-left-[px] desktop:w-[555px] mobile:w-[324px] mobile:h-[324px] mobile:top-[500px] mobile:left-[50px] blur-[200px] rotate-90 z-0'><BigYellowCircle /></div>
            <div className='absolute desktop:top-[500px] desktop:left-[120px] mobile:top-[300px] blur-[200px] z-0'><PinkCircle /></div>
            <div className='absolute z-0 desktop:top-[400px] desktop:w-[500px] mobile:left-[100px] mobile:top-[300px] desktop:blur-[237px] mobile:blur-[120px] z-0'><Blue316 /></div>
        </div>
    </div>
  )
}

export default DeliveryCalc;
