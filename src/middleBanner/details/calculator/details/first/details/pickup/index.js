import React, { useState } from 'react'

const PickUp = () => {
  const [ isSelect, setIsSelect ] = useState('cargo')

  const handleButtonClick = (value) => {
    setIsSelect(value);
  };


  return (
    <div className='mt-[10px]'>
        <div className='flex font-lato font-bold text-[13px] leading-[1.118rem]'>
            Потребуется ли забор товара?
            <span className='text-[#E82C15]'>*</span>
        </div>
        <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[8px]'>
          <button
            className={`flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
              isSelect === 'cargo' ? 'bg-black text-white' : 'bg-white text-black'
            }`}
            onClick={() => handleButtonClick('cargo')}
          >
            Карго/Рынок
          </button>
          <button
            className={`flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
              isSelect === 'no' ? 'bg-black text-white' : 'bg-white text-black'
            }`}
            onClick={() => handleButtonClick('no')}
          >
            Нет
          </button>
        </div>
    </div>
  )
}

export default PickUp;