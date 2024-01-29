import React from 'react'
import Frame from './frame';
import Blur from './blur';
import Marketlink from './marketlink';
import Wildberries from './/wildberries';
import Yandex from './yandex';
import Ozon from './ozon';
import Corner from './corner'
import CalcBtn from '../../calcCostBtn';


const CharacterBanner = () => {
  return (
    <div className='container relative desktop: desktop:w-[1440px] desktop:h-[820px] mobile:w-[387px] mobile:h-[682px] overflow-hidden'>
         <div className='flex flex-col font-sfpro desktop:text-[68px] desktop:ml-[146px] mobile:ml-[25.85px] font-medium desktop:leading-[4.25rem] desktop:mt-[40px] desktop:w-[1144px] desktop:h-[136px] mobile:w-[334px] mobile:h-[192px] mobile:font-sfpro mobile:font- mobile:text-[48px] mobile:mt-[15px] mobile:leading-[3rem] mobile:-tracking-[.06em] text-center'>
            <div>Ответственный фулфилмент</div>
            <div>в Москве с гарантией</div>
        </div>
        <div className='flex overflow-x-auto'></div>
        <div className='flex desktop:flex tablet:flex mobile:hidden mt-[20px] desktop:ml-[501px]' style={{ backgroundImage: 'linear-gradient(92deg, #EB1988 4.78%, #005AF9 100%)', backgroundClip: 'text', color: 'transparent' }}>
            <div className='font-fira text-[32px] font-bold leading-8'>Скидка 20%&nbsp;</div>
            <div className='font-fira text-[32px] font-normal leading-8'>на первый заказ</div>
        </div>
        <div className='desktop:block tablet:block mobile:hidden desktop:ml-[602px] desktop:mt-[35.61px]'><CalcBtn /></div>
        <div className='flex absolute top-[394.09px] ml-[467px] desktop:block tablet:block mobile:hidden'><Frame /></div>
        <img src="/images/character.png" alt='person' className='flex absolute desktop:w-[428.8px] desktop:top-[378px] desktop:ml-[523px] mobile:top-[304px] z-30'/>
        <div className='flex flex-col absolute desktop:w-[694px] desktop:h-[278px] font-coolvetica font-normal desktop:text-[235.301px] desktop:leading-[8.677rem] desktop:top-[406px] desktop:left-[394px] text-center mobile:w-[633.993px] mobile:h-[270px] mobile:text-[215px] mobile:font-normal mobile:leading-[7.927rem] mobile:top-[350px] mobile:-left-[100px] text-white z-20'>
          <div>маркет</div>
          <div>линк</div>
        </div>
        <Blur />
        <Corner />
        <div className='desktop:block tablet:block mobile:hidden'>
          <Marketlink />
          <Wildberries />
          <Yandex />
          <Ozon />
        </div>
    </div>
  )
}

export default CharacterBanner