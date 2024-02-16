import React, { useState } from 'react';

const Attachments = ({ onOptionSelect }) => {
  const [selectedButton, setSelectedButton] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedButton(option);
    onOptionSelect(option);
  };

  return (
    <div className='flex flex-col items-start mt-[10px]'>
      <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>Вложение (подарок, визитка, др.)</div>
      <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[8px]'>
        <button
            className={`flex w-[164px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out focus:outline-none ${
              selectedButton === 'yes' ? 'bg-black text-white focus:bg-black focus:text-white' : ''
            }`}
            onClick={() => handleOptionSelect('yes')}
          >
            Да
        </button>
        <button
            className={`flex w-[164px] h-[42px] bg-[#FAFAFA] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out focus:outline-none
            ${selectedButton === 'no' ? 'bg-black text-white focus:bg-black focus:text-white' : ''}
            `}
            onClick={() => handleOptionSelect('no')}
          >
            Нет
        </button>
      </div>
    </div>
  );
};

export default Attachments;