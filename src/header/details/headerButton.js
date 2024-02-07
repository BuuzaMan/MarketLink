import React, { useState } from 'react';
import RoundedButton from '../../svg/headerButton';
import CloseButton from '../../svg/closeButton';
import Whatsapp from '../../svg/whatsapp';
import Telega from '../../svg/telega';
import CalcBtn from '../../calcCostBtn';

const HeaderButton = () => {
    const [isButtonOpen, setIsButtonOpen] = useState(false);

    const toggleButton = () => {
        setIsButtonOpen(!isButtonOpen);
    };

    const closeMenu = () => {
        setIsButtonOpen(false);
    };

    return (
        <div className="mt-[13px] z-40">
            <button onClick={toggleButton}>
                <RoundedButton />
            </button>
                {isButtonOpen && (
                    <div className="flex flex-col absolute z-40 w-[345px] h-[780px] bg-white bg-white rounded-[40px] left-0 top-0">
                        <div className='flex'>
                            <div className='flex mobile:w-[204px] h-[21px] mobile:mt-[36.24px] mobile:ml-[31.47px]'>
                                <div className='font-gothic mobile:text-[24.449px] font-normal mobile:leading-[1.329rem] mobile:tracking-[.229em] uppercase'>MARKET</div>
                                <div className='font-macan mobile:text-[24.449px] font-normal mobile:leading-[1.329rem] mobile:tracking-[.229em] '>LlNK</div>
                            </div>
                            <div className='mt-[13px] ml-[32px]' onClick={closeMenu}><CloseButton /></div>
                        </div>
                        <div className='flex flex-col font-sfpro font-normal text-[18.485px] leading-[1.155rem] gap-y-[58px] mt-[53.76px]'>
                            <button onClick={closeMenu}>Услуги</button>
                            <button onClick={closeMenu}>Цены</button>
                            <button onClick={closeMenu}>Карго из Китая</button>
                            <button onClick={closeMenu}>О нас</button>
                            <button onClick={closeMenu}>Отзывы</button>
                            <button onClick={closeMenu}>Контакты</button>
                            <div className='flex ml-[114.62px] gap-x-[44px]'>
                                <Whatsapp />
                                <Telega />
                            </div>
                        </div>
                        <div className='mt-[58px] ml-[56px]'><CalcBtn /></div>
                    </div>
            )}
        </div>
    );
};

export default HeaderButton;