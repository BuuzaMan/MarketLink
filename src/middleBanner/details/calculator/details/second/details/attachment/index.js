import React, { useState } from 'react'

const Attachment = () => {
  const [isAttachment, setIsAttachment] = useState('');

  const handleButtonClick = (value) => {
    setIsAttachment(value);
  };

  return (
    <div className='flex flex-col items-start mt-[10px]'>
        <div className='font-lato font-bold text-[13.005px] leading-[1rem]'>Вложение (подарок, визитка, др.)</div>
        <div className='flex w-[336px] h-[43px] mt-[px] space-x-[8px] mt-[8px]'>
        <button
          className={`flex w-[164px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
            isAttachment === 'yes' ? 'bg-black text-white' : 'bg-white text-black'
          } focus:outline-none focus:bg-black focus:text-white`}
          onClick={() => handleButtonClick('yes')}
        >
          Да
        </button>
        <button
          className={`flex w-[164px] h-[42px] bg-[#FAFAFA] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
            isAttachment === 'no' ? 'bg-black text-white' : 'bg-white text-black'
          } focus:outline-none focus:bg-black focus:text-white`}
          onClick={() => handleButtonClick('no')}
        >
          Нет
        </button>
        </div>
    </div>
  )
}

export default Attachment;