import React from 'react'
import GrCircle from '../../../../svg/gradientCircle';
import Hands from '../../../../svg/hands';
import Box from '../../../../svg/box';
import Barcode from '../../../../svg/barcode';
import BlueCircle from '../../../../svg/blueCircle';
import PinkCircle from '../../../../svg/pinkCircle';
import YellowCircle from '../../../../svg/YellowCircle';

const Service = () => {
  return (
    <div className='flex flex-col relative desktop:w-[592px] desktop:h-[472px] mobile:w-[346px] mobile:h-[276px] rounded-[16px] bg-white overflow-hidden bg-[#FFFFFF]'>
        <div className='flex font-sfpro font-medium desktop:text-[48px] mobile:text-[28px] desktop:mt-[43px] mobile:mt-[15px] desktop:ml-[46px] mobile:ml-[26.89px] leading-[3rem] tracking-[-.05em]'>25 видов услуг</div>
        <div className='z-40'>
          <div className='flex desktop:rounded-[24px] mobile:rounded-[14px] bg-[#FCFDFF] desktop:w-[494px] desktop:h-[118px] mobile:w-[288.723px] mobile:h-[69.042px] desktop:ml-[51px] mobile:ml-[29.81px] desktop:mt-[62px] mobile:mt-[33px] shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
              <div className='flex relative desktop:w-[60px] desktop:h-[60px] mobile:w-[32px] mobile:h-[32px] items-center justify-center desktop:mt-[29px] desktop:ml-[31px] mobile:mt-[16.95px] mobile:ml-[18.12px]'>
                <GrCircle />
                <Hands />
              </div>
              <div className='flex font-sfpro font-bold desktop:text-[30px] mobile:text-[17.534px] desktop:leading-[1.875rem] mobile:leading-[1.096rem] desktop:ml-[16px] desktop:mt-[33px] mobile:mt-[25.13px] mobile:ml-[9.35px]'>Забор товара день в день</div>
          </div>
          <div className='flex desktop:rounded-[24px] mobile:rounded-[14px] bg-[#FCFDFF] desktop:w-[494px] desktop:h-[107.39px] mobile:w-[288.723px] mobile:h-[62.766px] desktop:ml-[51px] mobile:ml-[29.81px] desktop:mt-[11px] mobile:mt-[6.43px] shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
              <div className='flex relative desktop:w-[60px] desktop:h-[60px] items-center justify-center desktop:ml-[31px] desktop:mt-[25px] mobile:mt-[0px] mobile:ml-[34.12px]'>
                <GrCircle />
                <Box />
              </div>
              <div className='flex font-sfpro font-bold desktop:text-[30px] desktop:ml-[16px] desktop:mt-[33px] mobile:ml-[25px] mobile:mt-[21.93px] desktop:leading-[1.875rem] desktop:-tracking-[.038em] mobile:text-[17.534px] mobile:leading-[1.096rem] mobile:-tracking-[.022em]'>Упаковка</div>
          </div>
          <div className='flex desktop:rounded-[24px] mobile:rounded-[14.027px] bg-[#FCFDFF] desktop:w-[494px] mobile:w-[288.723px] desktop:h-[107.39px] mobile:h-[62.766px] desktop:ml-[51px] mobile:ml-[29px] desktop:mt-[11px] mobile:mt-[6.43px] shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
              <div className='flex relative desktop:w-[60px] desktop:h-[60px] items-center justify-center desktop:mt-[25px] desktop:ml-[31px] mobile:ml-[34.12px] mobile:-mt-[12px]'>
                <GrCircle />
                <Barcode />
              </div>
              <div className='flex font-sfpro font-bold desktop:text-[30px] mobile:text-[17.534px] desktop:ml-[16px] mobile:ml-[25px] desktop:mt-[33px] mobile:mt-[12px]'>Маркировка и ярлыки</div>
          </div>
        </div>
        <div className='flex absolute desktop:left-[475px] mobile:left-[150px] desktop:mt-[273px] mobile:mt-[100px] blur-[100px]'><BlueCircle /></div>
        <div className='flex absolute desktop:left-[250px] desktop:top-[275px] mobile:left-[100px] mobile:top-[130px] blur-[100px]'><PinkCircle /></div>
        <div className='flex absolute desktop:mt-[230px] mobile:top-[200px] -left-[250px] blur-[100px]'><YellowCircle /></div>
    </div>
    
  )
}

export default Service;