import React from 'react'
import Accordion from './details/accordion';
import Contacts from './details/contacts';

const Answers = () => {
  return (
    <div className='flex flex-col desktop:w-[1208px] mobile:w-[386px] items-center desktop:mt-[120px] mobile:mt-[80px] font-sfpro'>
        <div className='font-medium desktop:w-[451px] mobile:w-[259px] desktop:h-[64px] mobile:h-[40px] desktop:text-[64px] mobile:text-[40px] leading-[1rem] -tracking-[.05em] text-center'>Вопрос-Ответ</div>
        <div className='desktop:mt-[48px] mobile:mt-[40px]'><Accordion /></div> 
        <div className='desktop:mt-[48px] mobile:mt-[52px]'><Contacts /></div>
    </div>
  )
};

export default Answers;
