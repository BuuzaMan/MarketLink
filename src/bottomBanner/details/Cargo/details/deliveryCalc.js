import React from 'react'
import Volume from './volume';
import Select from './select';
import CostButton from './costButton';
import BigYellowCircle from '../../../../svg/BigYellowCircle';
import PinkCircle from '../../../../svg/pinkCircle';
import BigBlueCircle from '../../../../svg/bigBlueCircle';

const DeliveryCalc = () => {
  return (
    <div className='w-[592px] h-[756px] rounded-2xl relative overflow-hidden bg-[#FFFFFF]'>
        <div className='flex flex-col mt-[31px] ml-[41px]'>
            <div className='w-[411px] h-[96px] font-sfpro font-medium text-[48px] leading-[3rem] -tracking-[.06em]'>Калькулятор доставки из Китая</div>
            <div className='mt-[45px] font-sfpro font-bold text-[24px] leading-[1.95rem] -tracking-[.03em] h-[42.56px] w-[274px]'>Информация о грузе</div>
            <div className='flex font-sfpro gap-x-[12.23px] mt-[8.43px]'>
              <div className='w-[235.946px]'>
                <div className='font-normal text-[18.427px] leading-[1.497rem] tracking-[.046em] h-[43.57px] justify-center'>Общий объём, м³</div>
                <div className='z-40'><Volume /></div>
              </div>
              <div className='w-[248.878px]'>
                <div className='font-normal text-[18.427px] leading-[1.497rem] tracking-[.046em] h-[43.57px] justify-center'>Общий вес, кг</div>
                <div className='z-40'><Volume /></div>
              </div>
            </div>
            <div className='flex  font-sfpro mt-[35.42px] gap-x-[18px]'>
              <div className='flex flex-col'>
                <div className='font-normal text-[16px] leading-[1.3rem] tracking-[.04em] w-[238px] h-[21px] z-40'>Оценочная стоимость груза, $</div>
                <input
                type='text'
                placeholder='0.01'
                className='w-[249px] h-[64px] z-40 rounded-[12.173px] font-white outline-none placeholder:pl-[20.26px] placeholder:pt-[23px] placehodler:text-[#898989] mt-[18px]'
                ></input>
              </div>
              <div className='z-40'>
                <div className='font-normal text-[16px] leading-[1.3rem] tracking-[.04em] w-[238px] h-[21px]'>Вид груза</div>
                <div><Select /></div>
              </div>
            </div>
            <div className='font-sfpro font-bold text-[24px] leading-[1.95rem] -tracking-[.03em] mt-[31px]'>Примерная стоимость</div>
            <div className='flex mt-[10px] font-sfpro font-bold z-30'>
              <div className='text-[40px] leading-[2.5rem] -tracking-[.05em] mt-[22px]'>от&nbsp;</div>
              <div className='text-[64px] leading-[4rem] -tracking-[.05em]'>44,990₽</div>
            </div>
            <div className='mt-[41px] z-30'><CostButton /></div>
            <div className='absolute top-[450px] -left-[300px] blur-[237px] z-0'><BigYellowCircle /></div>
            <div className='absolute top-[500px] left-[120px] blur-[237px] z-10'><PinkCircle /></div>
            <div className='absolute z-0 top-[64px] left-[1px] z-0'><BigBlueCircle /></div>
        </div>
    </div>
  )
}

export default DeliveryCalc;
