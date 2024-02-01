import React from 'react'

const Third = () => {
  return (
    <div className='flex flex-col relative overflow-hidden desktop:w-[589px] desktop:h-[532px] mobile:w-[346px] mobile:h-[515px] desktop:rounded-2xl mobile:rounded-[11.3px] bg-white'>
          <div className='flex flex-col mt-[45px] ml-[46px]'>
            <div className='font-sfpro font-medium text-[48px] leading-[3rem] w-[349px] h-[96px] -tracking-[.06em]'>Чёткое техзадание</div>
            <div className='font-sfpro font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] mt-[16px] w-[256px] h-[42px]'>Работаем по собственной форме ТЗ, чтобы ничего не упустить</div>
          </div>
          <div className='flex flex-col relative overflow-hidden w-[513px] h-[408px] rounded-t-[10px] bg-white shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] mt-[52px] ml-[37px] z-40'>
            <div className='flex mt-[29px] ml-[31px] z-40'>
              <div className='font-sfpro font-bold text-[24px] leading-[1.95rem] -tracking-[.03em]'>Общая информация</div>
              <div className='font-sfpro font-bold text-[16px] text-[#4F4F4F] leading-[2.5rem] tracking-[.04em] ml-[130px]'>Этап 1 из 5</div>
            </div>
            <div className='flex flex-col mt-[19px] ml-[31px] z-40'>
              <div className='w-[446px] h-[58px] rounded-[8px] border-[#78CD51] border-[1px] bg-green-50'>
                <div className='mt-[19px] ml-[23px] font-sfpro text-[16px] text-[#409F15] leading-[1.3rem] tracking-[.04em]'>Грантберри</div>
              </div>
              <div className='w-[446px] h-[58px] rounded-[8px] bg-[#F6F6F6] mt-[15px]'>
                <div className='mt-[19px] ml-[23px] font-sfpro text-[16px] text-[#5C5C5C] leading-[1.3rem] tracking-[.04em]'>Ваше имя</div>
              </div>
              <div className='w-[446px] h-[58px] rounded-[8px] bg-[#F6F6F6] mt-[16px]'>
                <div className='mt-[19px] ml-[23px] font-sfpro text-[16px] text-[#5C5C5C] leading-[1.3rem] tracking-[.04em]'>Номер телефона</div>
              </div>
            </div>
          </div>
          <div className='flex absolute bg-white w-[513px] h-[408px] z-10 rounded-t-[10px] ml-[54px] mt-[277px] bg-[#FEFEFE]'></div>
    </div>
  )
};

export default Third;