import React, { useState } from 'react';

const Speed = () => {
  const [selectedButton, setSelectedButton] = useState('slow');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className='flex flex-col desktop:w-[516px] mobile:w-[299px] desktop:h-[107px] mobile:h-[66px] desktop:mt-[19px] mobile:mt-[10px] font-sfpro desktop:text-[24px] mobile:text-[14px] desktop:font-bold mobile:font-bold desktop:leading-[1rem] mobile:leading-[1.3rem] desktop:-tracking-[.02em] mobile:-tracking-[.009em] z-40'>
      <div className='desktop:w-[274px] desktop:h-[43px]'>Скорость доставки</div>
      <div className='flex flex-row desktop:w-[516px] mobile:w-[298px] desktop:h-[64px] mobile:h-[37.41px] font-sfpro desktop:text-[18.427px] mobile:text-[10px] leading-[1rem] tracking-[.04em] desktop:gap-x-[18px] mobile:gap-x-[7.15px]'>
        <button
          className={`desktop:w-[249px] mobile:w-[146px] desktop:h-[64px] mobile:h-[37.41px] ${selectedButton === 'slow' ? 'bg-black text-white' : 'bg-white text-black'} desktop:rounded-[12.173px] mobile:rounded-[10px]`}
          onClick={() => handleButtonClick('slow')}
        >
          Медленная (20-25 дней)
        </button>
        <button
          className={`desktop:w-[249px] mobile:w-[146px] desktop:h-[64px] mobile:h-[37.41px] ${selectedButton === 'fast' ? 'bg-black text-white' : 'bg-white text-black'} desktop:rounded-[12.173px] mobile:rounded-[10px]`}
          onClick={() => handleButtonClick('fast')}
        >
          Быстрая (10-15 дней)
        </button>
      </div>
    </div>
  );
};

export default Speed;