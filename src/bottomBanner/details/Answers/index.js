import React from 'react'
import Accordion from './details/accordion';
import Contacts from './details/contacts';

const Answers = () => {
  return (
    <div className='flex flex-col w-[1208px] items-center mt-[120px] font-sfpro'>
        <div className='font-medium text-[64px] leading-[4rem] -tracking-[.05em]'>Вопрос-Ответ</div>
        <div className='mt-[48px]'><Accordion /></div> 
        <div className='mt-[48px]'><Contacts /></div>
    </div>
  )
};

export default Answers;
