import React, { useState } from 'react';
import ButtonDecrease from '../../../../../../svg/buttonDecrease';
import ButtonIncrease from '../../../../../../svg/buttonIncrease';

const Volume = () => {
  const [count, setCount] = useState(0);
  const step = 0.05;

  const increaseCount = () => {
    setCount(parseFloat((count + step).toFixed(3)));
  };
  
  const decreaseCount = () => {
    if (count - step >= 0.01) {
      setCount(parseFloat((count - step).toFixed(3)));
    }
  };

  const handleInputChange = (e) => {
    const inputValue = parseFloat(e.target.value);
    if (!isNaN(inputValue)) {
      setCount(inputValue);
    }
  };

  return (
    <div className='flex'>
      <button className='z-40' onClick={decreaseCount}><ButtonDecrease /></button>
      <input
        type='number'
        step='any'
        value={count}
        onChange={handleInputChange}
        placeholder='0.01'
        className='desktop:w-[106.8px] mobile:w-[62.4px] desktop:h-[64px] mobile:h-[37.4px] z-40 desktop:rounded-[12.173px] mobile:rounded-[7.115px] outline-none desktop:pl-[35px] placeholder:desktop:pt-[23px] placeholder:mobile:pt-[10px] placeholder:desktop:text-[16px] placeholder:mobile:text-[10px] placeholder:text-[#898989] desktop:pl-[0px] mobile:pl-[20px] desktop:ml-[7px] mobile:ml-[4.09px] desktop:mr-[7px] mobile:mr-[4.09px]'
      />
      <button className='z-40' onClick={increaseCount}><ButtonIncrease /></button>
    </div>
  );
};

export default Volume;
