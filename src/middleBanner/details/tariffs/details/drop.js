import React from 'react'

const Drop = () => {
  return (
    <div className='flex flex-col relative overflow-hidden desktop:w-[284px] mobile:w-[346px] desktop:h-[340px] mobile:h-[414px] desktop:rounded-2xl mobile:rounded-[19.4px] bg-[#FFFFFF]'>
        <div className='font-sfpro font-medium desktop:text-[40px] mobile:text-[32px] desktop:leading-[2.5rem] mobile:leading-[2rem] desktop:-tracking-[.05em] mobile:-tracking-[.04em] desktop:mt-[23px] mobile:mt-[28px] desktop:ml-[26px] mobile:ml-[31.6px]'>Поставка на маркетплейс</div>
        <div className='flex'>
            <div className='flex flex-col w-[125px] desktop:mt-[131px] mobile:mt-[240px] desktop:ml-[26px] mobile:ml-[31.68px] z-10'>
                <div className='flex'>
                    <div className='font-sfpro font-normal desktop:text-[19.703px] mobile:text-[24px] leading-[1.3rem] tracking-[.04em]'>От&nbsp;</div>
                    <div className='font-sfpro font-bold text-[40px] leading-[1rem] -tracking-[.02em]'>200₽</div>
                </div>
                <div className='desktop:mt-[0.89px] mobile:mt-[6.1px] font-sfpro font-normal desktop:text-[19.703px] mobile:text-[24px] text-[#828282] leading-[1.3rem] tracking-[.04em]'>за короб</div>
            </div>
            <div className='absolute desktop:w-[225px] mobile:w-[274px] desktop:h-[138px] mobile:h-[168px] desktop:mt-[52px] mobile:mt-[130px] desktop:ml-[148px] mobile:ml-[170px] z-0'><img src='images/backtruck.png' alt='deliverytruck'/></div>
        </div>
    </div>
  )
}

export default Drop;