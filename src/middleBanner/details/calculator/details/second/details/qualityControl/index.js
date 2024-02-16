import React, { useState } from 'react';

const QualityControl = ({ onControlChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (value) => {
    setSelectedOption(value);
    onControlChange(value);
  };

  return (
    <div className='flex flex-col items-start mt-[18px]'>
      <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>Проверка на брак</div>
      <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[8px]'>
        <button
          className={`flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
            selectedOption === 'visual' ? 'bg-black text-white' : 'bg-white text-black'
          } focus:outline-none focus:bg-black focus:text-white`}
          onClick={() => handleButtonClick('visual')}
        >
          Визуальная
        </button>
        <button
          className={`flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
            selectedOption === 'detailed' ? 'bg-black text-white' : 'bg-white text-black'
          } focus:outline-none focus:bg-black focus:text-white`}
          onClick={() => handleButtonClick('detailed')}
        >
          Детальная
        </button>
      </div>
    </div>
  );
};

export default QualityControl;