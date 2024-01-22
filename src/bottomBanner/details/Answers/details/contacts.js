import React from 'react'
import Wtsp from '../../../../svg/wtsp';
import Tlgrm from '../../../../svg/tlgrm';
import BigYellowCircle from '../../../../svg/BigYellowCircle';


const Contacts = () => {
  return (
    <div className='flex relative overflow-hidden w-[1208px] h-[172px] rounded-2xl items-center justify-center'>
        <div className='font-bold text-[24px] leading-[1.95rem] -tracking-[.03em] z-40'>Остались вопросы? Свяжитесь с нами</div>
        <div className='ml-[42px] z-40'><Wtsp /></div>
        <div className='ml-[14.92px] z-40'><Tlgrm /></div>
        <div className='absolute z-0'><img src='images/Ellipse pink.png' alt='pink' /></div>
        <div className='absolute z-0 left-[80px]'><img src='images/Ellipse blue.png' alt='pink' /></div>
        <div className='absolute top-[100px] -left-[100px] blur-[345px] z-0'><BigYellowCircle /></div>
    </div>
  )
}

export default Contacts;