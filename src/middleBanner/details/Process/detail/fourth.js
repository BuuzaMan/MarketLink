import React from 'react'

const Fourth = () => {
  return (
    <div className='flex flex-col overflow-hidden desktop:w-[589px] mobile:w-[346px] desktop:h-[532px] mobile:h-[300px] desktop:rounded-2xl mobile:rounded-[11.3px] bg-white'>
        <div className='desktop:mt-[45px] mobile:mt-[18px] desktop:ml-[55px] mobile:ml-[23px]'>
            <div className='font-sfpro font-medium desktop:text-[48px] mobile:text-[32px] desktop:leading-[2.5rem] mobile:leading-[1.8rem] desktop:-tracking-[.06em] mobile:-tracking-[.02em] desktop:w-[400px] mobile:w-[200px] desktop:h-[96px] mobile:h-[48px]'>Без скрытых платежей</div>
            <div className='font-sfpro font-normal desktop:text-[16px] mobile:text-[12px] text-[#4F4F4F] desktop:leading-[1.3rem] mobile:leading-[1.3rem] desktop:tracking-[.04em] mobile:tracking-[.04em] desktop:w-[357px] mobile:w-[250px] desktop:h-[42px] mt-[16px]'>Вы знаете конечную цену до того, как мы приступаем к обработке вашей заявки.</div>
        </div>
        <div className='desktop:mt-[46px] mobile:mt-[10px] desktop:ml-[55px] mobile:ml-[23px]'><img src='images/excel_tab.png' alt='excel' className='desktop:w-[534px] mobile:w-[330px]'/></div>
    </div>
  )
}

export default Fourth;