import React from 'react'
import Marketlink from '../marketlink';
import Wildberries from '../wildberries';
import Yandex from '../yandex';
import Ozon from '../ozon';
import Frame from '../frame';

const Cell = () => {
  return (
    <div className='desktop:block tablet:block mobile:flex desktop:w-[1440px] desktop:h-[600px] mobile:w-[386px] mobile:h-[50px] mobile:overflow-x-auto mobile:overscroll-contain mobile:scrollbar-hide mobile:gap-x-[15px] mobile:mt-[32px] desktop:order-1 tablet:order-1 mobile:order-2 desktop:bg-transparent mobile:bg-white z-40'>
        <div className='desktop:absolute desktop:top-[374px] desktop:left-[310px]'><Marketlink /></div>
        <div className='desktop:absolute desktop:left-[1027px] desktop:top-[370px]'><Wildberries /></div>
        <div className='desktop:absolute desktop:left-[295px] desktop:top-[732.89px]'><Yandex /></div>
        <div className='desktop:absolute desktop:left-[1038px] desktop:top-[727px]'><Ozon /></div>
        <div className='flex absolute top-[394.09px] ml-[467px] desktop:block tablet:block mobile:hidden'><Frame /></div>
    </div>
  )
}

export default Cell;