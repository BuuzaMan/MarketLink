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
            <div className='z-40 flex items-center justify-center w-[106px] h-[64px] ml-[7px] mr-[7px] rounded-[12.173px] bg-white font-normal text-[16px] text-[#898989] leading-[1.3rem] tracking-[.04em]'>{count.toFixed(2)}</div>
            <button className='z-40' onClick={increaseCount}><ButtonIncrease /></button>
        </div>
    )
};

export default Volume;
