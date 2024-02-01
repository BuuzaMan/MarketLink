import React from 'react'

const Fourth = () => {
  return (
    <div className='flex flex-col overflow-hidden desktop:w-[589px] mobile:w-[346px] desktop:h-[532px] mobile:h-[515px] desktop:rounded-2xl mobile:rounded-[11.3px] bg-white'>
        <div className='mt-[45px] ml-[55px]'>
            <div className='font-sfpro font-medium text-[48px] leading-[3rem] -tracking-[.06em] w-[400px] h-[96px]'>Без скрытых платежей</div>
            <div className='font-sfpro font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] w-[357px] h-[42px] mt-[16px]'>Вы знаете конечную цену до того, как мы приступаем к обработке вашей заявки.</div>
        </div>
        <div className='mt-[46px] ml-[55px]'><img src='images/excel_tab.png' alt='excel' /></div>
    </div>
  )
}

export default Fourth;