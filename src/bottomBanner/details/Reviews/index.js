import React from 'react'

const Reviews = () => {
  return (
    <div className='flex flex-col desktop:w-[1208px] mobile:w-[386px] items-center desktop:mt-[120px] mobile:mt-[0px] font-sfpro'>
        <div className='font-bold desktop:w-[360px] mobile:w-[220px] desktop:h-[31px] mobile:h-[62px] text-center text-[24px] leading-[1.3rem] -tracking-[.03em] bg-gradient-to-r from-[#EB1988] to-[#005AF9] bg-clip-text text-transparent'>Проверено десятками селлеров</div>
        <div className='desktop:w-[998px] mobile:w-[346px] desktop:h-[128px] mobile:h-[160px] font-medium desktop:text-[64px] mobile:text-[40px] desktop:leading-[4rem] mobile:leading-[2.3rem] -tracking-[.08em] text-center'>
          <div>Заботливый фулфилмент,</div>
          <div>с которым приятно работать</div>
        </div>
        <div className='flex desktop:flex-row mobile:flex-col desktop:gap-x-[20px] mobile:gap-y-5 mt-[40px] items-center'>
            <div className='desktop:w-[387px] desktop:h-[328px] mobile:w-[346px] mobile:h-[293.2px]'><img src='images/msg1.png' alt='message' className='rounded-2xl'/></div>
            <div className='desktop:w-[390px] desktop:h-[328px] mobile:w-[346px] mobile:h-[283px] flex flex-col'>
                <div className='desktop:w-[390px] mobile:w-[346px] desktop:h-[183px] mobile:h-[162.3px]'><img src='images/msg2.png' alt='message' className='rounded-2xl'/></div>
                <div className='desktop:w-[390px] mobile:w-[346px] desktop:h-[113px] mobile:h-[100.2px] desktop:mt-[32px] mobile:mt-[20px]'><img src='images/msg3.png' alt='message' className='rounded-2xl'/></div>
            </div>
        </div>
        <button className='w-[234px] h-[56px] rounded-[229px] bg-black text-white text-[16px] font-bold leading-[1.3rem] desktop:mt-[50px] mobile:mt-[20px]'>Рассчитать стоимость</button>
    </div>
  )
};

export default Reviews;