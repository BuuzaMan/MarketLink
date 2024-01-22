import React from 'react'
import Doc from '../../../../svg/doc';
import YellowCircle from '../../../../svg/YellowCircle';
import BlueCircle from '../../../../svg/blueCircle';
import PinkCircle from '../../../../svg/pinkCircle';
import BigYellowCircle from '../../../../svg/BigYellowCircle';

let Grid = () => {
  return (
    <div className='flex grid grid-cols-2 w-[1208px] h-[500px] mt-[40px] gap-x-6 gap-y-6 items-center justify-center'>
        <div className='flex flex-col relative overflow-hidden w-[589px] h-[532px] rounded-2xl bg-[#FEFEFE]'>
            <div className='flex font-sfpro font-medium text-[48px] leading-[3rem] -tracking-[.06em] w-[200px] mt-[45px] ml-[46px] z-40'>Работаем “в белую”.</div>
            <div className='flex z-40 flex-col mt-[125.27px] ml-[42px] font-sfpro font-normal text-[26.488px] text-[#4F4F4F] leading-[2.152rem] gap-y-[20.59px] z-30'>
                <div className='flex w-[144.832px] h-[60.813px] rounded-[13.244px] bg-white shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] items-center justify-center'>Договор</div>
                <div className='flex w-[197.146px] h-[60.488px] rounded-[13.244px] bg-white shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] items-center justify-center'>Акты приема</div>
                <div className='flex w-[221.146px] h-[60.488px] rounded-[13.244px] bg-white shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] items-center justify-center'>Акты передачи</div>
            </div>
            <div className='flex absolute left-[245px] z-40'><Doc /></div>
            <div className='flex absolute top-[350px] -left-[80px] blur-[150px] z-10'><YellowCircle /></div>
            <div className='flex absolute top-[380px] left-[500px] blur-[237px] z-10'><BlueCircle /></div>
            <div className='flex absolute top-[350px] left-[420px] blur-[237px] z-10'><PinkCircle /></div>
        </div>
        <div className='flex flex-col relative w-[589px] h-[532px] rounded-2xl bg-[#FEFEFE]'>
          <div className='flex font-sfpro font-medium text-[48px] leading-[3rem] mt-[45px] ml-[55px] -tracking-[.06em]'>Отчитываемся на всех этапах работы.</div>
            <div className='flex relative w-[482px] h-[184px] mt-[57px] ml-[54px] rounded-[11px] shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
              <div className='w-[393px] h-[201px] mt-[8.45px] ml-[12.67px] font-sfpro font-normal text-[19.91px] leading-[1.672rem]'>
                <div>Добрый день, Александр!</div>
                <div>Надеюсь, у Вас всё хорошо!</div>
                <div>С удовольствием предоставляю Вам отчёт по результатам первого этапа нашей работы. Жду Ваших комментариев и предложений.</div>
              </div>
              <div className='flex absolute top-[160px] left-[435px] font-sfpro font-normal text-[15.486px] text-[#667781]'>17:07</div>
            </div>
            <div className='flex relative overflow-hidden flex-col w-[478px] h-[258px] shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] rounded-t-[11px] ml-[54px] mt-[16.61px]'>
              <div className='flex mt-[18.97px] ml-[26.73px] w-[469.46px] h-[250px] rounded-[11px]'>
                <div className='font-sfpro font-medium text-[19.311px] leading-[1.207rem] w-[208px] h-[19px]'>Отчет по этапу №1</div>
                <div className='flex ml-[109px]'>
                  <div className='font-gothic text-[12.826px] leading-[0.697rem] tracking-[.12em]'>MARKET</div>
                  <div className='font-macan text-[12px] leading-[0.697rem] tracking-[.12em]'>LlNK</div>
                </div>
              </div>
              <div className='mt-[40px] ml-[26.73px] w-[351px] h-[66px] font-sfpro font-medium text-[32.588px] leading-[2.037rem]'>Интервью с клиентом. Техническое задание</div>
              <div className='absolute top-[60px] -left-[190px] z-0 blur-[150px]'><BlueCircle /></div>
              <div className='absolute top-[50px] left-[170px] z-0 blur-[150px]'><PinkCircle /></div>
              <div className='absolute -top-[150px] left-[350px] z-0 blur-[150px]'><BigYellowCircle /></div>
            </div>
        </div>
        <div className='flex flex-col relative overflow-hidden w-[589px] h-[532px] rounded-2xl bg-[#FEFEFE]'>
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
        <div className='flex flex-col overflow-hidden w-[589px] h-[532px] rounded-2xl shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
          <div className='mt-[45px] ml-[55px]'>
            <div className='font-sfpro font-medium text-[48px] leading-[3rem] -tracking-[.06em] w-[400px] h-[96px]'>Без скрытых платежей</div>
            <div className='font-sfpro font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] w-[357px] h-[42px] mt-[16px]'>Вы знаете конечную цену до того, как мы приступаем к обработке вашей заявки.</div>
          </div>
          <div className='mt-[46px] ml-[55px]'><img src='images/excel_tab.png' alt='excel' /></div>
        </div>
    </div>
  )
};

export default Grid;
