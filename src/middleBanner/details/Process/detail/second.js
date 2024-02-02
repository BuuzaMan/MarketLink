import React from 'react'
import BlueCircle from '../../../../svg/blueCircle';
import PinkCircle from '../../../../svg/pinkCircle';
import BigYellowCircle from '../../../../svg/BigYellowCircle';

const Second = () => {
  return (
    <div className='flex flex-col relative desktop:w-[589px] mobile:w-[346px] desktop:h-[532px] mobile:h-[340px] desktop:rounded-2xl mobile:rounded-[11.3px] bg-[#FEFEFE]'>
        <div className='flex desktop:w-[370px] desktop:h-[96px] font-sfpro font-medium desktop:text-[48px] mobile:text-[32px] desktop:leading-[3rem] mobile:leading-[2rem] desktop:mt-[45px] mobile:mt-[18px] desktop:ml-[55px] mobile:ml-[23px] desktop:-tracking-[.06em] mobile:-tracking-[.04em]'>Отчитываемся на всех этапах работы</div>
        <div className='flex relative desktop:w-[482px] mobile:w-[300px] desktop:h-[184px] mobile:h-[150px] desktop:mt-[57px] mobile:mt-[30px] desktop:ml-[54px] mobile:ml-[23px] rounded-[11px] shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
            <div className='desktop:w-[393px] mobile:w-[240px] desktop:h-[201px] mobile:h-[120px] desktop:mt-[8.45px] mobile:mt-[10px] desktop:ml-[12.67px] mobile:ml-[10px] font-sfpro font-normal desktop:text-[19.91px] mobile:text-[14px] desktop:leading-[1.672rem] mobile:leading-[1.138rem]'>
                <div>Добрый день, Александр!</div>
                <div>Надеюсь, у Вас всё хорошо!</div>
                <div>С удовольствием предоставляю Вам отчёт по результатам первого этапа нашей работы. Жду Ваших комментариев и предложений.</div>
            </div>
            <div className='flex absolute desktop:top-[160px] mobile:top-[110px] desktop:left-[435px] mobile:left-[265px] font-sfpro font-normal desktop:text-[15.486px] mobile:text-[12px] text-[#667781]'>17:07</div>
        </div>
        <div className='flex relative overflow-hidden flex-col desktop:w-[478px] mobile:w-[300px] h-[258px] shadow-[0px_24px_54.5px_0px_rgba(7,22,61,0.15)] rounded-t-[11px] desktop:ml-[54px] mobile:ml-[23px] desktop:mt-[16.61px] mobile:mt-[10px]'>
            <div className='flex desktop:mt-[18.97px] mobile:mt-[11px] desktop:ml-[26.73px] mobile:ml-[16px] desktop:w-[469.46px] desktop:h-[250px] '>
                <div className='font-sfpro font-medium desktop:text-[19.311px] mobile:text-[14px] desktop:leading-[1.207rem] mobile:leading-[0.875rem] desktop:w-[208px] desktop:h-[19px]'>Отчет по этапу №1</div>
                <div className='flex desktop:ml-[109px] mobile:ml-[65px] mobile:mt-[5px]'>
                    <div className='font-gothic desktop:text-[13px] mobile:text-[12px] desktop:leading-[0.697rem] mobile:leading-[0.653rem] desktop:tracking-[.12em] mobile:tracking-[.075em]'>MARKET</div>
                    <div className='font-macan desktop:text-[12px] mobile:text-[10px] desktop:leading-[0.697rem] mobile:leading-[0.653rem] desktop:tracking-[.12em] mobile:tracking-[.075em]'>LlNK</div>
                </div>
            </div>
            <div className='desktop:mt-[40px] mobile:mt-[24px] desktop:ml-[26.73px] mobile:ml-[16px] desktop:w-[351px] mobile:w-[250px] desktop:h-[66px] font-sfpro font-semibold desktop:text-[32.588px] mobile:text-[22px] desktop:leading-[2.037rem] mobile:leading-[1.375rem]'>Интервью с клиентом. Техническое задание</div>
            <div className='absolute top-[60px] -left-[190px] z-0 blur-[150px]'><BlueCircle /></div>
            <div className='absolute top-[50px] left-[170px] z-0 blur-[150px]'><PinkCircle /></div>
            <div className='absolute -top-[150px] left-[350px] z-0 blur-[150px]'><BigYellowCircle /></div>
        </div>
    </div>
  )
}

export default Second;