import React from 'react'
import GrCircle from '../../svg/gradientCircle';
import Hands from '../../svg/hands';
import Box from '../../svg/box';
import Barcode from '../../svg/barcode';
import BlueCircle from '../../svg/blueCircle';
import PinkCircle from '../../svg/pinkCircle';
import YellowCircle from '../../svg/YellowCircle';

let Cards = () => {
  return (
    <div className='flex flex-wrap  h-[1053px] w-[1208px] space-y-[22px] mt-[79px]'>
        <div className='flex space-x-6 z-40'>
          <div className='flex flex-col relative w-[592px] h-[472px] rounded-[16px] bg-white overflow-hidden shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
            <div className='flex font-sfpro font-medium text-[48px] mt-[43px] ml-[46px] leading-[3rem] tracking-[-.05em]'>25 видов услуг</div>
            <div className='z-40'>
              <div className='flex rounded-[24px] bg-[#FCFDFF] w-[494px] h-[118px] ml-[51px] mt-[62px] shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
                <div className='flex relative w-[60px] h-[60px] items-center justify-center mt-[29px] ml-[31px]'>
                  <GrCircle />
                  <Hands />
                </div>
                <div className='flex font-sfpro font-bold text-[30px] ml-[16px] mt-[33px]'>Забор товара день в день</div>
              </div>
              <div className='flex rounded-[24px] bg-[#FCFDFF] w-[494px] h-[107.39px] ml-[51px] mt-[11px] shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
                <div className='flex relative w-[60px] h-[60px] items-center justify-center mt-[29px] ml-[31px]'>
                  <GrCircle />
                  <Box />
                </div>
                <div className='flex font-sfpro font-bold text-[30px] ml-[16px] mt-[33px]'>Упаковка</div>
              </div>
              <div className='flex rounded-[24px] bg-[#FCFDFF] w-[494px] h-[107.39px] ml-[51px] mt-[11px] shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
                <div className='flex relative w-[60px] h-[60px] items-center justify-center mt-[29px] ml-[31px]'>
                  <GrCircle />
                  <Barcode />
                </div>
                <div className='flex font-sfpro font-bold text-[30px] ml-[16px] mt-[33px]'>Маркировка и ярлыки</div>
              </div>
            </div>
            <div className='flex absolute left-[475px] mt-[273px] blur-[100px]'><BlueCircle /></div>
            <div className='flex absolute left-[250px] top-[275px] blur-[100px]'><PinkCircle /></div>
            <div className='flex absolute mt-[230px] blur-[90px]'><YellowCircle /></div>
          </div>
          <div className='flex relative w-[592px] h-[472px] rounded-[16px] bg-orange-300'>
            <div className='flex font-sfpro font-medium text-[48px] leading-[3rem] tracking-[-.05em] mt-[43px] ml-[40px]'> Личный менеджер</div>
          </div>
        </div>
        <div className='flex space-x-6'>
          <div className='flex flex-col relative overflow-hidden w-[387px] h-[559px] rounded-[16px] bg-white shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
            <div className='flex font-sfpro text-[48px] font-medium leading-[3rem] tracking-[-.05em] mt-[36px] ml-[27px]'>Ежедневные поставки на маркетплейсы</div>
            <div className='flex z-40'>
              <div className='ml-[37px] mt-[34px]'><img src="/images/mainPhone.png" alt="phone" /></div>
              <div className='flex absolute ml-[52px] mt-[46px]'><img src="/images/mainScreen.png" alt="screen" /></div>
              <div className='flex absolute ml-[148px] mt-[54px]'><img src="/images/dynamic.png" alt="dynamicIsland" /></div>
              <div className='flex absolute ml-[212px] mt-[63px]'><img src="/images/camera.png" alt="camera" /></div>
              <div className='flex absolute'><img src="images/shadow.png" alt="shadow" /></div>
            </div>
            <div className='flex absolute -left-[170px] mt-[350px] blur-[90px]'><YellowCircle /></div>
            <div className='flex absolute left-[60px] top-[280px] blur-[100px]'><BlueCircle /></div>
            <div classname><PinkCircle /></div>
          </div>
          <div className='flex relative w-[386px] h-[559px] rounded-[16px] bg-white overflow-hidden'>
            <div className='flex font-sfpro text-[48px] font-medium leading-[3rem] tracking-[-.05em] ml-[31px] mt-[36px]'>FBO и FBS</div>
            <div className='flex absolute mt-[87px]'><img src="/images/box.png" alt="box" /></div>
          </div>
          <div className='flex flex-col relative w-[387px] h-[559px] rounded-[16px] bg-white overflow-hidden shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
            <div className='flex flex-col mt-[36px] ml-[31px] z-40'>
              <div className='flex font-sfpro text-[48px] font-medium leading-[3rem] tracking-[-.05em]'>36 часов</div>
              <div className='flex font-sfpro text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] mt-[12px] w-[274px]'>среднее время от поступления заявки до поставки.</div>
            </div>
            <div><img src="/images/truck.png" alt="truck" className='flex absolute bottom-[1px] z-40'/></div>
            <div className='flex absolute mt-[350px] blur-[100px]'><BlueCircle /></div>
            <div className='flex absolute top-[350px] -left-[120px] blur-[150px] z-30'><BlueCircle /></div>
            <div className='flex absolute -left-[90px] top-[140px] blur-[80px] z-10'><PinkCircle /></div>
          </div>
        </div>
    </div>
  )
};

export default Cards;
