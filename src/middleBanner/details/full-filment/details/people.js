import React from 'react'

const People = () => {
  return (
    <div className='flex flex-col desktop:w-[1208px] mobile:w-[346px] desktop:h-[464px] mobile:h-[493px] rounded-2xl bg-[#FFFFFF] desktop:mt-[24px] mobile:mt-[20px]'>
        <div className='flex w-[300px] h-[81px] desktop:mt-[49px] mobile:mt-[22px] desktop:ml-[54px] mobile:ml-[23px]  overflow-hidden -space-x-2'>
            <img className='inline-block rounded-full ring-[4px] ring-white h-[81px] w-[81px]' src='/images/girl2.png' alt='secong'></img>
            <img className='inline-block rounded-full ring-[4px] ring-white h-[81px] w-[81px]' src='/images/man.png' alt='man'></img>
            <img className='inline-block rounded-full ring-[4px] ring-white h-[81px] w-[81px]' src='/images/girl1.png' alt='first' />
            <div className='flex rounded-full w-[81px] h-[81px] bg-red-100 justify-center items-center font-sfpro font-medium text-[22.992px] leading-[1.433rem] ring-4 ring-white'>+4</div>
        </div>
        <div className='flex desktop:w-[1088px] mobile:w-[285px] desktop:h-[240px] mobile:h-[310px] desktop:mt-[23px] mobile:mt-[39px] desktop:ml-[56px] mobile:ml-[23px] font-sfpro desktop:font-medium mobile:font-bold desktop:text-[48px] mobile:text-[24px] desktop:leading-[3rem] mobile:leading-[1.95rem] desktop:-tracking-[.06em] mobiel:-tracking-[.03em]'>😊 Мы - не безликий сервис, а люди с которыми можно договориться. Человеческое общение позволяет нам решать все возникающие вопросы максимально оперативно и обеспечивать гибкие сроки поставок.</div>
    </div>
  )
}

export default People;