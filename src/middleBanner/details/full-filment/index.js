import React from 'react'
import WHSP from '../../../svg/whsp';
import TG from '../../../svg/TG';
import PinkCircle from '../../../svg/pinkCircle';
import BlueCircle from '../../../svg/blueCircle';
import YellowCircle from '../../../svg/YellowCircle';

const FullFilment = () => {
  return (
    <div className='flex flex-col container w-[1208px] mt-[130px] mx-auto items-center'>
        <div className='flex flex-col text-center items-center w-[1208px] space-y-[8px]'>
            <div className='font-sfpro font-bold text-[24px] leading-[1.95rem] w-[254px] h-[31px]' style={{ backgroundImage: 'linear-gradient(92deg, #EB1988 4.78%, #005AF9 100%)', backgroundClip: 'text', color: 'transparent' }}>Мы сделаем все за вас</div>
            <div className='font-sfpro font-medium text-[64px] leading-[4rem] w-[899px] h-[64px] tracking-[-.03em]'>Фулфилмент без головной боли</div>
        </div>
        <div className='flex flex-col w-[1208px] h-[1183px] mt-[40px]'>
            <div className='flex'>
                <div className='flex flex-col relative overflow-hidden w-[695px] h-[652px] shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] rounded-2xl'>
                    <div className='font-sfpro font-medium text-[48px] leading-[3rem] w-[612px] h-[192px] mt-[38px] ml-[46px]'>Организация поставки и забота о качественной приемке и упаковке товара съедает много времени</div>
                    <div className='font-sfpro font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] mt-[24px] ml-[52px]'>Вам больше не придется переживать и отвлекаться по мелочам.</div>
                    <div className='flex mt-[31.37px] ml-[52px] z-10'><img src='images/wts.png' alt='whatsup' /></div>
                    <div className='flex absolute top-[380px] left-[420px] blur-[150px] z-0'><PinkCircle /></div>
                    <div className='flex absolute top-[300px] left-[480px] blur-[150px] z-0'><BlueCircle /></div>
                    <div className='flex absolute top-[452px] -left-[150px] z-0 blur-[150px]'><YellowCircle /></div>
                </div>
                <div className='flex flex-col w-[489px] h-[652px] rounded-2xl ml-[24px] relative overflow-hidden shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)]'>
                    <div className='flex font-sfpro font-medium text-[48px] leading-[3rem] ml-[49px] mt-[38px] w-[410px]'>Персональный менеджер всегда на связи</div>
                    <div className='flex font-sfpro font-normal text-[15px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em] w-[369px] h-[84px] ml-[49px] mt-[20px]'>Ваши личный ассистент в организации поставки, который отвечает в течении 15 минут и всегда в курсе ваших логистических процессов.</div>
                    <div className='flex absolute mt-[235px] z-10'><img src='/images/woman.png' alt='manager' /></div>
                    <div className='flex absolute mt-[320px] ml-[70px] z-10'><WHSP /></div>
                    <div className='flex absolute mt-[374px] ml-[340px] z-10'><TG /></div>
                    <div className='flex rounded-[240px] w-[358px] h-[84px] justify-center items-center z-30 mt-[253px] ml-[67px] backdrop-blur-[64px]'><div className='w-[290px] h-[42px] font-fira font-normal text-[#F5F5F7] text-[16px] leading-[1.3rem] text-center '>На связи в удобном вам мессенджере 7 дней в неделю с 9 до 21.00 Мск</div></div>
                    <div className='flex absolute rotate-90 mt-[380px] -left-[270px] z-0 blur-[150px]'><img src='/images/Ellipse3.png' alt='bg glow' /></div>
                    <div className='flex absolute -rotate-90 top-[450px] left-[250px] blur-[100px]'><YellowCircle /></div>
                </div>
            </div>
            <div className='flex flex-col w-[1208px] h-[464px] rounded-2xl shadow-[0px_3.104px_183.424px_0px_rgba(7,22,61,0.12)] mt-[24px]'>
                <div className='flex w-[300px] h-[81px] mt-[49px] ml-[54px] overflow-hidden -space-x-2'>
                    <img className='inline-block rounded-full ring-[4px] ring-white h-[81px] w-[81px]' src='/images/girl2.png' alt='secong'></img>
                    <img className='inline-block rounded-full ring-[4px] ring-white h-[81px] w-[81px]' src='/images/man.png' alt='man'></img>
                    <img className='inline-block rounded-full ring-[4px] ring-white h-[81px] w-[81px]' src='/images/girl1.png' alt='first' />
                    <div className='flex rounded-full w-[81px] h-[81px] bg-red-100 justify-center items-center font-sfpro font-medium text-[22.992px] leading-[1.433rem] ring-4 ring-white'>+4</div>
                </div>
                <div className='flex w-[1088px] h-[240px] mt-[23px] ml-[56px] font-sfpro font-medium text-[48px] leading-[3rem]'>😊 Мы - не безликий сервис, а люди с которыми можно договориться. Человеческое общение позволяет нам решать все возникающие вопросы максимально оперативно и обеспечивать гибкие сроки поставок.</div>
            </div>
        </div>
    </div>
  )
};

export default FullFilment;
