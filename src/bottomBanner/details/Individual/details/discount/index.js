import React from 'react'
import PinkCircle316px from '../../../../../svg/pinkCircle316px';
import Blue316 from '../../../../../svg/blue316';
import YellowCircle from '../../../../../svg/YellowCircle';

const Discount = () => {
  return (
    <div className='flex relative flex-col desktop:rounded-2xl mobile:rounded-[9.351px] overflow-hidden desktop:w-[592px] mobile:w-[346px] desktop:h-[567px] mobile:h-[332px]'>
        <div className='desktop:w-[488px] mobile:w-[151px] desktop:h-[192px] mobile:h-[56px] font-bold desktop:text-[73.412px] mobile:text-[42.9px] desktop:leading-[5.84rem] mobile:leading-[1.3rem] desktop:-tracking-[.03em] mobile:-tracking-[.02em] desktop:mt-[36px] mobile:mt-[21px] desktop:ml-[51px] mobile:ml-[29.8px]'>Скидка</div>
        <div className='absolute desktop:w-[592px] mobile:w-[301px] desktop:h-[567px] mobile:h-[259px] font-bold desktop:text-[442.561px] mobile:text-[259px] desktop:leading-[22rem] desktop:-tracking-[.09em] mobile:leading-[13rem] mobile:-tracking-[.06em] z-20 desktop:top-[150px] mobile:top-[75px] desktop:left-[59px] mobile:left-[30px]' style={{ backgroundImage: 'linear-gradient(180deg, #F5F5F7 65.75%, #F5F5F7 100%)', backgroundClip: 'text', color: 'transparent' }}>20</div>
        <div className='absolute z-30 desktop:w-[514px] mobile:w-[300px] desktop:h-[308px] mobile:h-[180px] -scale-x-100 desktop:top-[271px] mobile:top-[150px] desktop:left-[130px] mobile:left-[75px]'><img src='images/fulltruck.png' alt='truck' /></div>
        <div className='absolute z-40 font-medium desktop:text-[118.882px] mobile:text-[69.4px] text-[#F5F5F7] desktop:leading-[7.43rem] mobile:leading-[1rem] desktop:-tracking-[.669em] desktop:mt-[390px] mobile:mt-[250px] desktop:ml-[477px] mobile:ml-[280px]'>%</div>
        <div className='absolute'>
            <div className='absolute desktop:w-[400px] mobile:w-[400px] desktop:h-[400px] mobile:h-[400px] desktop:top-[150px] mobile:top-[100px] desktop:blur-[150px] mobile:blur-[100px] z-0'><PinkCircle316px /></div>
            <div className='absolute desktop:w-[500px] mobile:w-[400px] desktop:h-[500px] mobile:h-[400px] desktop:top-[10px] desktop:left-[50px] mobile:-left-[30px] mobile:-top-[50px] desktop:blur-[150px] mobile:blur-[150px] z-10'><Blue316 /></div>
            <div className='absolute desktop:w-[555px] mobile:w-[555px] desktop:h-[555px] mobile:h-[600px] desktop:top-[190px] mobile:-top-[70px] desktop: mobile:left-[250px] desktop:blur-[120px] mobile:blur-[150px] z-0'><YellowCircle /></div>
        </div>
        <div className='absolute desktop:w-[68.565px] mobile:w-[40.073px] desktop:h-[592px] mobile:h-[346px] backdrop-filter backdrop-blur-[19px] desktop:left-[385px] mobile:left-[225.02px] z-30 shadow-[0px_0.742px_1.484px_0px_rgba(255,255,255,0.16)]' />
        <div className='absolute desktop:w-[68.565px] mobile:w-[40.073px] desktop:h-[592px] mobile:h-[346px] backdrop-filter backdrop-blur-[19px] desktop:left-[453.56px] mobile:left-[265.09px] z-30 shadow-[0px_0.742px_1.484px_0px_rgba(255,255,255,0.16)]'/>
        <div className='absolute desktop:w-[68.565px] mobile:w-[40.073px] desktop:h-[592px] mobile:h-[346px] backdrop-filter backdrop-blur-[19px] desktop:left-[522.13px] mobile:left-[305.16px] z-30 shadow-[0px_0.742px_1.484px_0px_rgba(255,255,255,0.16)]'/>
    </div>
  )
}

export default Discount;