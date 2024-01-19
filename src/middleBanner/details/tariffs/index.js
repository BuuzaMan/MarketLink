import React from 'react'
import BigYellowCircle from '../../../svg/BigYellowCircle';
import PinkCircle from '../../../svg/pinkCircle';
import BlueCircle from '../../../svg/blueCircle';
import Pricing from './details/pricing';

let Tariffs = () => {
  return (
    <div className='flex flex-col w-[1208px] items-center mt-[120px]'>
        <div className='w-[971px] h-[128px]'>
            <div className='font-sfpro font-medium text-[64px] leading-[4rem] -tracking-[.06em] text-center'>Выгодные тарифы</div>
            <div className='font-sfpro font-medium text-[64px] leading-[4rem] -tracking-[.06em] text-center'>оптимизации вашего бизнеса</div>
        </div>
        <div className='flex mt-[40.01px] space-x-[24px]'>
            <div>
                <div className='flex space-x-[19px]'>
                    <div className='flex flex-col relative overflow-hidden w-[284px] h-[340px] rounded-2xl shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
                        <div className='font-sfpro font-medium text-[40px] leading-[2.5rem] -tracking-[.05em] mt-[23px] ml-[26px]'>Поставка на маркетплейс</div>
                        <div>
                            <div className='absolute w-[225px] top-[170px] right-[184px]'><img src='images/backtruck.png' alt='deliverytruck' /></div>
                            <div className='flex flex-col ml-[106px] mt-[120.84px] w-[150px]'>
                                <div className='flex'>
                                    <div className='font-sfpro font-normal text-[19.703px] leading-[1.601rem] tracking-[.049em] mt-[23px]'>От&nbsp;</div>
                                    <div className='font-sfpro font-medium text-[49.09px] leading-[3.068rem] -tracking-[.061em]'>200₽</div>
                                </div>
                                <div className='font-sfpro font-normal text-[19.703px] text-[#828282] leading-[1.601rem] tracking-[.049em]'>за короб</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col relative w-[284px] h-[340px] rounded-2xl shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
                        <div className='font-sfpro font-medium text-[40px] leading-[2.5rem] -tracking-[.05em] mt-[23px] ml-[26px] w-[165px]'>Упаковка под ключ</div>
                        <div className='flex'>
                            <div className='flex mt-[73px]'><img src='images/mlbox.png' alt='dlvrbox' /></div>
                            <div className='flex absolute -rotate-90 -left-[27px] bottom-[102px] text-white'>
                                <div className='font-gothic font-normal text-[11.924px] leading-[0.648rem] tracking-[.112em] font-white'>MARKET</div>
                                <div className='font-macan font-normal text-[11.924px] leading-[0.648rem] tracking-[.112em] font-white'>LlNK</div>
                            </div>
                            <div className='flex flex-col w-[150px] mt-[116px] ml-[48.8px]'>
                                <div className='flex'>
                                    <div className='font-sfpro font-normal text-[19.703px] leading-[1.601rem] tracking-[.049em] mt-[23px]'>От&nbsp;</div>
                                    <div className='font-sfpro font-medium text-[49.09px] leading-[3.068rem] -tracking-[.061em]'>19₽</div>
                                </div>
                                <div className='font-sfpro font-normal text-[19.703px] text-[#828282] leading-[1.601rem] tracking-[.049em]'>за единицу</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col relative overflow-hidden rounded-2xl shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] w-[592px] h-[275px] mt-[19px]'>
                    <div className='font-sfpro font-medium text-[40px] leading-[2.5rem] -tracking-[.05em] mt-[32.99px] ml-[28.24px] w-[232px] h-[80px] z-10'>Посмотрите прайс-лист</div>
                    <button className='rounded-[229px] bg-black w-[159px] h-[56.3px] z-10 text-white font-sfpro font-bold text-[16px] leading-[1.3rem] mt-[84px] ml-[28.24px]'>Прайс-лист</button>
                    <div className='absolute -rotate-45 -top-[90px] left-[190px] blur-[200px] z-0'><BigYellowCircle /></div>
                    <div className='absolute left-[250px] top-[160px] blur-[200px] z-0'><PinkCircle /></div>
                    <div className='absolute -left-[130px] top-[300px] blur-[150px] z-0'><BlueCircle /></div>
                    <div className='absolute top-[30px] left-[334px]'><Pricing /></div>
                </div>
            </div>
            <div className='flex flex-col w-[592px] h-[632px] rounded-2xl shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
                <div className='w-[512px] rounded-xl mt-[35px] ml-[40px]'><img src='images/map.png' alt='map' className='rounded-xl'/></div>
                <div className='mt-[32px] ml-[40px] space-y-[8px]'>
                    <div className='font-sfpro font-bold text-[24px] leading-[1.95rem] w-[498px]'>Минимальные тарифы на забор и поставку.</div>
                    <div className='font-sfpro font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] w-[507px]'>Находимся на 8 км МКАД в непосредственной близости от ТК Садовод, СЦ Южные Ворота, складов Коледино и Электросталь.</div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Tariffs;
