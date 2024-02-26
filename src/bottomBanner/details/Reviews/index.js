import React from 'react'

const Reviews = () => {
  return (
    <div className='flex flex-col w-[1208px] items-center mt-[120px] font-sfpro' id="reviews">
        <div className='font-bold text-[24px] leading-[1.95rem] -tracking-[.03em] bg-gradient-to-r from-[#EB1988] to-[#005AF9] bg-clip-text text-transparent'>Проверено десятками селлеров</div>
        <div className='font-medium text-[64px] leading-[4rem] -tracking-[.08em] w-[800px] text-center mt-[8px]'>Заботливый фулфилмент,</div>
        <div className='font-medium text-[64px] leading-[4rem] -tracking-[.08em] w-[800px] text-center'>с которым приятно работать</div>
        <div className='flex gap-x-[20px] mt-[40px]'>
            <div className='w-[387px] h-[328px]'><img src='images/msg1.png' alt='message' className='rounded-2xl'/></div>
            <div className='w-[390px] h-[328px] flex flex-col'>
                <div className='w-[390px] h-[183px]'><img src='images/msg2.png' alt='message' className='rounded-2xl'/></div>
                <div className='w-[390px] h-[113px] mt-[32px]'><img src='images/msg3.png' alt='message' className='rounded-2xl'/></div>
            </div>
        </div>
        <button className='w-[234px] h-[56px] rounded-[229px] bg-black text-white text-[16px] font-bold leading-[1.3rem] mt-[50px]'>Рассчитать стоимость</button>
    </div>
  )
};

export default Reviews;