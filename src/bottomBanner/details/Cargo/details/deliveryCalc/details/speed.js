import React, { useState } from 'react';

const Speed = () => {
  const [selectedButton, setSelectedButton] = useState('slow');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className='flex flex-col desktop:w-[516px] desktop:h-[107px] desktop:mt-[19px] font-sfpro desktop:text-[24px] desktop:font-bold desktop:leading-[1rem] desktop:-tracking-[.02em] z-40'>
      <div className='w-[274px] h-[43px]'>Скорость доставки</div>
      <div className='flex flex-row desktop:w-[516px] desktop:h-[64px] font-sfpro desktop:text-[18.427px] leading-[1rem] tracking-[.04em] desktop:gap-x-[18px]'>
        <button
          className={`desktop:w-[249px] desktop:h-[64px] ${selectedButton === 'slow' ? 'bg-black text-white' : 'bg-white text-black'} desktop:rounded-[12.173px]`}
          onClick={() => handleButtonClick('slow')}
        >
          Медленная (20-25 дней)
        </button>
        <button
          className={`desktop:w-[249px] desktop:h-[64px] ${selectedButton === 'fast' ? 'bg-black text-white' : 'bg-white text-black'} desktop:rounded-[12.173px]`}
          onClick={() => handleButtonClick('fast')}
        >
          Быстрая (10-15 дней)
        </button>
      </div>
    </div>
  );
};

export default Speed;