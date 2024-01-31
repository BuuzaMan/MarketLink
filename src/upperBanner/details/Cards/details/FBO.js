import React from 'react'

const FBO = () => {
  return (
    <div className='flex relative desktop:w-[386px] desktop:h-[559px] mobile:w-[346px] mobile:h-[500px] desktop:rounded-[16px] mobile:rounded-[14.342px] bg-white overflow-hidden'>
        <div className='flex font-sfpro desktop:text-[48px] mobile:text-[32px] font-medium desktop:leading-[3rem] mobile:leading-[2rem] desktop:-tracking-[.05em] mobile:-tracking-[.04em] desktop:ml-[31px] mobile:ml-[23px] desktop:mt-[36px] mobile:mt-[21px]'>FBO и FBS</div>
        <div className='flex absolute desktop:mt-[87px] mobile:mt-[78px]'><img src="/images/box.png" alt="box" className='desktop:w-[750px] mobile:w-[672px]'/></div>
    </div>
  )
}

export default FBO