import React from 'react'
import Wtsp from '../../../../svg/wtsp';
import Tlgrm from '../../../../svg/tlgrm';
import BigYellowCircle from '../../../../svg/BigYellowCircle';
import PinkCircle from '../../../../svg/pinkCircle';
import Blue316 from '../../../../svg/blue316';


const Contacts = () => {
  return (
    <div className='flex desktop:flex-row mobile:flex-col relative overflow-hidden desktop:w-[1208px] mobile:w-[346px] desktop:h-[172px] mobile:h-[268px] rounded-2xl items-center desktop:justify-center bg-white'>
        <div className='desktop:w-[428px] desktop:h-[31px] mobile:w-[226px] mobile:h-[62px] font-bold text-[24px] leading-[1.95rem] -tracking-[.03em] z-40 text-center desktop:mt-0 mobile:mt-[64px] z-10'>Остались вопросы? Свяжитесь с нами</div>
        <div className='flex desktop:mt-0 mobile:mt-[24px] z-10'>
          <div className='desktop:ml-[42px] z-40'><Wtsp /></div>
          <div className='ml-[14.92px] z-40'><Tlgrm /></div>
        </div>
        <div className='absolute z-0 w-[464px] desktop:top-[] desktop:left-[450px] mobile:top-[150px] mobile:left-[200px] blur-[200px] z-0'><PinkCircle /></div>
        <div className='absolute z-0 w-[464px] desktop:-top-[80px] mobile:top-[50px] desktop:left-[650px] mobile:left-[250px] blur-[200px] z-0'><Blue316 /></div>
        <div className='absolute desktop:top-[100px] desktop:-left-[100px] mobile:top-[60px] mobile:left-[100px] z-0 w-[815px] blur-[200px] z-0'><BigYellowCircle /></div>
    </div>
  )
}

export default Contacts;