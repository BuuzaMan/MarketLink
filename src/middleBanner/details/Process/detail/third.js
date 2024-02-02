import React from 'react'

const Third = () => {
  return (
    <div className='flex flex-col relative overflow-hidden desktop:desktop:w-[589px] desktop:h-[532px] mobile:w-[346px] mobile:h-[285px] desktop:rounded-2xl mobile:rounded-[11.3px] bg-white'>
          <div className='flex flex-col desktop:mt-[45px] desktop:ml-[46px] mobile:ml-[23px] mobile:mt-[18px]'>
            <div className='font-sfpro font-medium desktop:text-[48px] mobile:text-[32px] desktop:leading-[3rem] mobile:leading-[2rem] desktop:w-[349px] desktop:h-[96px] desktop:-tracking-[.06em] mobile:-tracking-[.02em]'>Чёткое техзадание</div>
            <div className='font-sfpro font-normal desktop:text-[16px] mobile:text-[12px] text-[#4F4F4F] desktop:leading-[1.3rem] mobile:leading-[0.975rem] desktop:tracking-[.04em] desktop:mt-[16px] mobile:mt-[12px] desktop:w-[256px] mobile:w-[180px] desktop:h-[42px]'>Работаем по собственной форме ТЗ, чтобы ничего не упустить.</div>
          </div>
          <div className='flex flex-col relative overflow-hidden desktop:w-[513px] mobile:w-[300px] desktop:h-[408px] rounded-t-[10px] bg-white shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] desktop:mt-[52px] mobile:mt-[23px] desktop:ml-[37px] mobile:ml-[23px] z-40'>
            <div className='flex desktop:mt-[29px] mobile:mt-[11px] desktop:ml-[31px] mobile:ml-[20px] z-40'>
              <div className='font-sfpro font-bold desktop:text-[24px] mobile:text-[14px] desktop:leading-[1.95rem] mobile:leading-[1.3rem] desktop:-tracking-[.03em]'>Общая информация</div>
              <div className='font-sfpro font-bold desktop:text-[16px] mobile:text-[11px] text-[#4F4F4F] desktop:leading-[2.5rem] desktop:tracking-[.04em] mobile:-tracking-[.03em] desktop:ml-[130px] mobile:ml-[90px] mobile:mt-[5px]'>Этап 1 из 5</div>
            </div>
            <div className='flex flex-col mt-[19px] ml-[31px] z-40'>
              <div className='desktop:w-[446px] desktop:h-[58px] mobile:w-[255px] mobile:h-[28px] rounded-[8px] border-[#78CD51] border-[1px] bg-green-50'>
                <div className='desktop:mt-[19px] mobile:mt-[4px] desktop:ml-[23px] mobile:ml-[15px] font-sfpro desktop:text-[16px] mobile:text-[11px] text-[#409F15] leading-[1.3rem] desktop:tracking-[.04em] mobile:tracking-[.044em]'>Грантберри</div>
              </div>
              <div className='desktop:w-[446px] desktop:h-[58px] mobile:w-[255px] mobile:h-[28px] rounded-[8px] bg-[#F6F6F6] mt-[15px]'>
                <div className='desktop:mt-[19px] mobile:mt-[4px] desktop:ml-[23px] mobile:ml-[15px] font-sfpro desktop:text-[16px] mobile:text-[11px] text-[#5C5C5C] leading-[1.3rem] desktop:tracking-[.04em] mobile:tracking-[.044em]'>Ваше имя</div>
              </div>
              <div className='desktop:w-[446px] desktop:h-[58px] mobile:w-[255px] mobile:h-[28px] rounded-[8px] bg-[#F6F6F6] mt-[16px]'>
                <div className='desktop:mt-[19px] mobile:mt-[4px] desktop:ml-[23px] mobile:ml-[15px] font-sfpro desktop:text-[16px] mobile:text-[11px] text-[#5C5C5C] leading-[1.3rem] desktop:tracking-[.04em] mobile:tracking-[.044em]'>Номер телефона</div>
              </div>
            </div>
          </div>
          <div className='flex absolute bg-white w-[513px] h-[408px] z-10 rounded-t-[10px] ml-[54px] mt-[277px] bg-[#FFFFFF] shadow-[0px_55px_168.34px_0px_rgba(7,22,61,0.12)]' />
    </div>
  )
};

export default Third;