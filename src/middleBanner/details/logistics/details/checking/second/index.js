import React from 'react'
import Remarka from '../../../../../../svg/remarka';
import RemarkaMiddle from '../../../../../../svg/remarkamiddle';
import Check from '../../../../../../svg/check';

const Second = () => {
  return (
    <div className='flex flex-col bg-[#FEFEFE] rounded-2xl bg-[#FFFFFF] desktop:w-[589px] mobile:w-[346px] desktop:h-[532px] mobile:h-[749px]'>
        <div className='flex desktop:flex-row mobile:flex-col desktop:mt-[30px] mobile:mt-[27px] desktop:ml-[34px] mobile:ml-[36px]'>
            <div className='font-sfpro font-medium desktop:text-[48px] mobile:text-[40px] desktop:leading-[3rem] mobile:leading-[1rem]'>Услуги склада</div>
            <div className='flex desktop:mt-[13px] mobile:mt-[25px] desktop:ml-[20px] rounded-[69.732px] w-[176px] h-[28.431px] bg-gradient-to-r from-[#EB1988] to-[#005AF9] font-sfpro font-bold text-[10.8px] text-white leading-[0.88rem] tracking-[.027em] items-center justify-center'>3 дня хранения бесплатно</div>
        </div>
        <div className='flex relative desktop:w-[524px] mobile:w-[278px] desktop:h-[380px] mobile:h-[585px] rounded-xl overflow-hidden desktop:mt-[38px] mobile:mt-[21px] ml-[34px]'>
            <img src='images/storage.png' alt='sklad' className='absolute object-cover w-full h-full'/>
            <div className='flex absolute desktop:w-[328px] mobile:w-[258px] desktop:h-[477px] desktop:mt-[11px] mobile:mt-[300px] desktop:left-[215px] mobile:left-[7px]'><img src='images/worker.png' alt='worker' /></div>
            <div className='flex flex-col absolute ml-[25px] mt-[72px] w-[269px] h-[121px] backdrop-blur-sm desktop:flex tablet:flex mobile:hidden'><Remarka /></div>
            <div className='flex absolute ml-[25px] mt-[214px] w-[215px] h-[121px] backdrop-blur-sm desktop:flex tablet:flex mobile:hidden'><RemarkaMiddle /></div>
            <div className='absolute desktop:hidden tablet:hidden mobile:flex mobile:top-[23px] mobile:left-[21px] backdrop-blur-[51px] mobile:w-[235px] mobile:h-[121px] rounded-[16px]'/>
            <div className='absolute desktop:hidden tablet:hidden mobile:flex mobile:top-[154px] mobile:left-[21px] backdrop-blur-[51px] mobile:w-[235px] mobile:h-[121px] rounded-[16px]' />
            <div className='absolute desktop:top-[101px] mobile:top-[52px] desktop:left-[49px] mobile:left-[45px]'><Check /></div>
            <div className='absolute w-[165px] h-[63px] desktop:top-[101px] mobile:top-[52px] desktop:left-[84px] mobile:left-[80px] font-sfpro font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>Чистый сухой склад для хранения вашего товара.</div>
            <div className='flex absolute desktop:left-[52px] mobile:left-[45px] desktop:top-[243px] mobile:top-[183px]'><Check /></div>
            <div className='absolute w-[116px] h-[63px desktop:left-[87px] mobile:left-[84px] desktop:top-[243px] mobile:top-[183px] font-sfpro font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>Дешевле, чем на складе маркетплейса.</div>
        </div>
    </div> 
  )
};

export default Second;