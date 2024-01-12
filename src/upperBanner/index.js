import React from 'react'
import CalcBtn from '../calcCostBtn';
import Frame from './frame';
import Corner from './corner';
import Blur from './blur';
import Marketlink from './marketlink';
import Wildberries from './wildberries';
import Yandex from './yandex';
import Ozon from './ozon';
import Cards from './details/Cards';
import Warranty from './details/Warranty';

const UpperBanner = () => {
  return (
    <div className='container flex flex-col items-center justify-center relative overflow-hidden'>
        <div className='font-sfpro text-[68px] font-medium leading-[4.25rem] mt-[40px] w-[1144px] h-[136px] text-center'>
            <div>Ответственный фулфилмент</div>
            <div>в Москве с гарантией</div>
        </div>
        <div className='flex mt-[20px]' style={{ backgroundImage: 'linear-gradient(92deg, #EB1988 4.78%, #005AF9 100%)', backgroundClip: 'text', color: 'transparent' }}>
            <div className='font-fira text-[32px] font-bold leading-8'>Скидка 20%&nbsp;</div>
            <div className='font-fira text-[32px] font-normal leading-8'>на первый заказ</div>
        </div>
        <div className='mt-[35.61px]'><CalcBtn /></div>
        <div className='container relative h-[500px] overflow-hidden'>
          <Frame />
          <img src="/images/character.png" alt='person' className='flex absolute mt-[57.63px] ml-[523px] z-40'/>
          <div className='flex flex-col absolute text-[235px] text-white z-30 w-[694px] h-[278px] ml-[389px] top-[100px] items-center font-coolvetica font-normal leading-[8.677rem]'>
            <div>маркет</div>
            <div>линк</div>
          </div>
          <Blur />
          <Corner />
          <Marketlink />
          <Wildberries />
          <Yandex />
          <Ozon />
        </div>
        <Cards />
        <Warranty />
    </div>
    
  )
};

export default UpperBanner;
