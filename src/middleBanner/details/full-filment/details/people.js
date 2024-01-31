import React from 'react'

const People = () => {
  return (
    <div className='flex flex-col w-[1208px] h-[464px] rounded-2xl bg-[#FFFFFF] mt-[24px]'>
        <div className='flex w-[300px] h-[81px] mt-[49px] ml-[54px] overflow-hidden -space-x-2'>
            <img className='inline-block rounded-full ring-[4px] ring-white h-[81px] w-[81px]' src='/images/girl2.png' alt='secong'></img>
            <img className='inline-block rounded-full ring-[4px] ring-white h-[81px] w-[81px]' src='/images/man.png' alt='man'></img>
            <img className='inline-block rounded-full ring-[4px] ring-white h-[81px] w-[81px]' src='/images/girl1.png' alt='first' />
            <div className='flex rounded-full w-[81px] h-[81px] bg-red-100 justify-center items-center font-sfpro font-medium text-[22.992px] leading-[1.433rem] ring-4 ring-white'>+4</div>
        </div>
        <div className='flex w-[1088px] h-[240px] mt-[23px] ml-[56px] font-sfpro font-medium text-[48px] leading-[3rem]'>😊 Мы - не безликий сервис, а люди с которыми можно договориться. Человеческое общение позволяет нам решать все возникающие вопросы максимально оперативно и обеспечивать гибкие сроки поставок.</div>
    </div>
  )
}

export default People;