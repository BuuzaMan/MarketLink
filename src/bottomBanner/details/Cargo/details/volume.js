import React, { useState } from 'react';
import ButtonDecrease from '../../../../svg/buttonDecrease';
import ButtonIncrease from '../../../../svg/buttonIncrease';

const Volume = () => {
  const [userInput, setUserInput] = useState('0.01');
  const step = 0.05;

  const increaseCount = () => {
    const currentValue = parseFloat(userInput);
    if (!isNaN(currentValue)) {
      const newValue = currentValue + step;
      setUserInput(newValue.toFixed(2));
    }
  };

  const decreaseCount = () => {
    const currentValue = parseFloat(userInput);
    if (!isNaN(currentValue) && currentValue - step >= 0.01) {
      const newValue = Math.max(currentValue - step, 0.01);
      setUserInput(newValue.toFixed(2));
    }
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;


    const filteredValue = newValue.replace(/[^0-9.]/g, '');
    setUserInput(filteredValue);
  };

  return (
    <div className='flex'>
      <button className='z-40' onClick={decreaseCount}><ButtonDecrease /></button>
      <input
        type='text'
        placeholder='0.01'
        value={userInput}
        onChange={handleInputChange}
        className='z-40 flex items-center justify-center w-[106px] h-[64px] ml-[7px] mr-[7px] rounded-[12.173px] bg-white font-normal text-[16px] text-[#898989] leading-[1.3rem] tracking-[.04em] pl-[20px] pr-8'
      />
      <button className='z-40' onClick={increaseCount}><ButtonIncrease /></button>
    </div>
  );
};

export default Volume;





