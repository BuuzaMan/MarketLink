import React, { useState } from 'react'
import ButtonDecrease from '../../../../../../svg/buttonDecrease';
import ButtonIncrease from '../../../../../../svg/buttonIncrease';

const Volume = () => {
    const [count, setCount] = useState(0.01);
    const step = 0.05;

    const increaseCount = () => {
        setCount(count + step);
      };    

    const decreaseCount = () => {
        if (count - step >= 0.01) {
            setCount(count - step);
        }
      };
    return (
        <div className='flex'>
            <button className='z-40' onClick={decreaseCount}><ButtonDecrease /></button>
            <div className='z-40 flex items-center justify-center desktop:w-[106px] desktop:h-[64px] mobile:w-[62.4px] mobile:h-[37.4px] desktop:ml-[7px] mobile:ml-[4.09px] desktop:mr-[7px] mobile:mr-[4.09px] desktop:rounded-[12.173px] mobile:rounded-[7.115px] bg-white font-normal desktop:text-[16px] mobile:text-[10px] text-[#898989] leading-[1.3rem] tracking-[.04em]'>{count.toFixed(2)}</div>
            <button className='z-40' onClick={increaseCount}><ButtonIncrease /></button>
        </div>
    )
};

export default Volume;
