import React from 'react'
import MosaicYellowGlow from '../../../../svg/mosaicYellowGlow';
import MosaicBlueGlow from '../../../../svg/mosaicBlueGlow';
import MosaicPinkGlow from '../../../../svg/mosaicPinkGlow';

const Mosaic = () => {
  return (
    <div className='desktop:w-[592px] desktop:h-[560px] mobile:w-[346px] mobile:h-[328px] rounded-2xl relative overflow-hidden desktop:order-1 tablet:order-1 mobile:order-2 '>
        <img src='images/face1.png' alt='face' className='w-[142px] h-[142px] rounded-full absolute bottom-[503px] right-[490px] z-40'/>
        <img src='images/face2.png' alt='face' className='w-[142px] h-[142px] rounded-full absolute top-[177px] right-[530px] z-40' />
        <img src='images/face3.png' alt='face' className='w-[114px] h-[114px] rounded-full absolute top-[395px] right-[530px] z-40' />
        <img src='images/face4.png' alt='face' className='w-[142px] h-[142px] rounded-full absolute bottom-[515px] right-[296px] z-40' />
        <img src='images/face5.png' alt='face' className='w-[96px] h-[96px] rounded-full absolute top-[82px] left-[87px] z-40' />
        <img src='images/face6.png' alt='face' className='w-[114px] h-[114px] rounded-full absolute top-[271px] left-[62px] z-40' />
        <img src='images/face7.png' alt='face' className='w-[142px] h-[142px] rounded-full absolute top-[458px] left-[68px] z-40' />
        <img src='images/face8.png' alt='face' className='w-[74px] h-[74px] rounded-full absolute top-[45px] right-[236px] z-40' />
        <img src='images/face9.png' alt='face' className='w-[156px] h-[156px] rounded-full absolute top-[163px] right-[232px] z-40' />
        <img src='images/face10.png' alt='face' className='w-[106px] h-[106px] rounded-full absolute top-[385px] right-[273px] z-40' />
        <img src='images/face7.png' alt='face' className='w-[142px] h-[142px] rounded-full absolute bottom-[509px] right-[15px] z-40' />
        <img src='images/face11.png' alt='face' className='w-[142px] h-[142px] rounded-full absolute top-[82px] right-[63px] z-40' />
        <img src='images/face12.png' alt='face' className='w-[106px] h-[106px] rounded-full absolute top-[279px] right-[118px] z-40' />
        <img src='images/face13.png' alt='face' className='w-[142px] h-[142px] rounded-full absolute top-[483px] right-[106px] z-40' />
        <img src='images/face14.png' alt='face' className='w-[142px] h-[142px] rounded-full absolute top-[217px] left-[529px] z-40' />
        <img src='images/face15.png' alt='face' className='w-[106px] h-[106px] rounded-full absolute top-[395px] left-[486px] z-40' />
        <div className='absolute top-[250px] z-10 blur-[150px]'><MosaicYellowGlow /></div>
        <div className='absolute z-0'><MosaicBlueGlow /></div>
        <div className='absolute z-0'><MosaicPinkGlow /></div>
    </div>
  )
}

export default Mosaic;