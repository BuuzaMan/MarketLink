import React from 'react'
import BlueCircle from '../../../../svg/blueCircle';
import PinkCircle from '../../../../svg/pinkCircle';
import BigYellowCircle from '../../../../svg/BigYellowCircle';

const Second = () => {
  return (
    <div className='flex flex-col relative desktop:w-[589px] mobile:w-[346px] desktop:h-[532px] mobile:h-[515px] desktop:rounded-2xl mobile:rounded-[11.3px] bg-[#FEFEFE]'>
        <div className='flex desktop:w-[370px] desktop:h-[96px] font-sfpro font-medium desktop:text-[48px] mobile:text-[32px] desktop:leading-[3rem] mobile:leading-[2rem] desktop:mt-[45px] mobile:mt-[18px] desktop:ml-[55px] mobile:ml-[23px] desktop:-tracking-[.06em] mobile:-tracking-[.04em]'>Отчитываемся на всех этапах работы</div>
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
  )
}

export default Second;