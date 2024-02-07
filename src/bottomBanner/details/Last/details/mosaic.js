import React from 'react'
import MosaicYellowGlow from '../../../../svg/mosaicYellowGlow';
import MosaicBlueGlow from '../../../../svg/mosaicBlueGlow';
import MosaicPinkGlow from '../../../../svg/mosaicPinkGlow';

const Mosaic = () => {
  return (
    <div className='desktop:w-[592px] desktop:h-[560px] mobile:w-[346px] mobile:h-[328px] rounded-2xl relative overflow-hidden desktop:order-1 tablet:order-1 mobile:order-2 '>
        <img src='images/face1.png' alt='face' className='desktop:w-[142px] mobile:w-[83] desltop:h-[142px] mobile:w-[83px] rounded-full absolute desktop:bottom-[503px] desktop:right-[490px] mobile:bottom-[291px] mobile:right-[291.4px] z-40'/>
        <img src='images/face2.png' alt='face' className='desktop:w-[142px] mobile:w-[83px] desktop:h-[142px] mobile:w-[83px] rounded-full absolute desktop:top-[177px] mobile:top-[103.45px] desktop:right-[530px] mobile:right-[308px] z-40' />
        <img src='images/face3.png' alt='face' className='desktop:w-[114px] mobile:w-[66.6px] desktop:h-[114px] mobile:h-[66.6px] rounded-full absolute desktop:top-[395px] mobile:top-[230.86px] desktop:right-[530px] mobile:right-[309.76px] z-40' />
        <img src='images/face4.png' alt='face' className='desktop:w-[142px] mobile:w-[83px] desktop:h-[142px] mobile:h-[83px] rounded-full absolute desktop:bottom-[515px] mobile:bottom-[301px] desktop:right-[296px] mobile:right-[173px] z-40' />
        <img src='images/face5.png' alt='face' className='desktop:w-[96px] mobile:w-[56px] desktop:h-[96px] mobile:h-[56px] rounded-full absolute desktop:top-[82px] mobile:top-[47.93px] desktop:left-[87px] mobile:left-[50.85px] z-40' />
        <img src='images/face6.png' alt='face' className='desktop:w-[114px] mobile:w-[66.6px] desktop:h-[114px] mobile:h-[66.6px] rounded-full absolute desktop:top-[271px] mobile:top-[158.39px] desktop:left-[62px] mobile:left-[36.24px] z-40' />
        <img src='images/face7.png' alt='face' className='desktop:w-[142px] mobile:w-[83px] desktop:h-[142px] mobile:w-[83px] rounded-full absolute desktop:top-[458px] mobile:top-[267.68px] desktop:left-[68px] mobile:left-[39.74px] z-40' />
        <img src='images/face8.png' alt='face' className='desktop:w-[74px] mobile:w-[43px] desktop:h-[74px] mobile:h-[43px] rounded-full absolute desktop:top-[45px] mobile:top-[26.3px] desktop:right-[236px] mobile:right-[137.93px] z-40' />
        <img src='images/face9.png' alt='face' className='desktop:w-[156px] mobile:w-[91px] desktop:h-[156px] mobile:h-[91px] rounded-full absolute desktop:top-[163px] mobile:top-[95.27px] desktop:right-[232px] mobile:right-[135.59px] z-40' />
        <img src='images/face10.png' alt='face' className='desktop:w-[106px] mobile:w-[62px] desktop:h-[106px] mobile:h-[62px] rounded-full absolute desktop:top-[385px] mobile:top-[225.02px] desktop:right-[273px] mobile:right-[159.56px] z-40' />
        <img src='images/face7.png' alt='face' className='desktop:w-[142px] mobile:w-[83px] desktop:h-[142px] mobile:h-[83px] rounded-full absolute desktop:bottom-[509px] mobile:bottom-[297.49px] desktop:right-[15px] mobile:right-[8.77px] z-40' />
        <img src='images/face11.png' alt='face' className='desktop:w-[142px] mobile:w-[83px] desktop:h-[142px] mobile:h-[83px] rounded-full absolute desktop:top-[82px] mobile:top-[47.93px] desktop:right-[63px] mobile:right-[36.82px] z-40' />
        <img src='images/face12.png' alt='face' className='desktop:w-[106px] mobile:w-[62px] desktop:h-[106px] mobile:h-[62px] rounded-full absolute desktop:top-[279px] mobile:top-[163.06px] desktop:right-[118px] mobile:right-[68.97px] z-40' />
        <img src='images/face13.png' alt='face' className='desktop:w-[142px] mobile:w-[63px] desktop:h-[142px] mobile:h-[63px] rounded-full absolute desktop:top-[483px] mobile:top-[282.29px] desktop:right-[106px] mobile:right-[61.95px] z-40' />
        <img src='images/face14.png' alt='face' className='desktop:w-[142px] mobile:w-[83px] desktop:h-[142px] mobile:h-[83px] rounded-full absolute desktop:top-[217px] mobile:top-[126.83px] desktop:left-[529px] mobile:left-[309.18px] z-40' />
        <img src='images/face15.png' alt='face' className='desktop:w-[106px] mobile:w-[62px] desktop:h-[106px] mobile:h-[62px] rounded-full absolute desktop:top-[395px] mobile:top-[230.86px] desktop:left-[486px] mobile:left-[284.05px] z-40' />
        <div className='absolute desktop:top-[250px] mobile:top-[100px] z-0 desktop:blur-[110px] mobile:blur-[100px]'><MosaicYellowGlow /></div>
        <div className='absolute desktop:top-[200px] mobile:top-[150px] desktop:left-[450px] mobile:left-[280px] mobile:w-[150px] mobile:h-[150px] desktop:w-[316px] desktop:blur-[150px] mobile:blur-[80px] z-0'><MosaicBlueGlow /></div>
        <div className='absolute desktop:w-[200px] mobile:w-[150px] desktop:h-[200px] mobile:w-[150px] desktop:top-[420px] mobile:top-[230px] desktop:left-[150px] mobile:left-[90px] desktop:blur-[180px] mobile:blur-[120px] z-0'><MosaicPinkGlow /></div>
    </div>
  )
}

export default Mosaic;