import React, { useState } from 'react';

const Marking = ({ onMarkingChange }) => {
  const [isMarked, setIsMarked] = useState('');
  const [selectedMark, setSelectedMark] = useState('');

  const handleMarkingButtonClick = (markType) => {
    setIsMarked(true);
    setSelectedMark(markType);
    onMarkingChange(markType);
  };
  
  return (
    <div>
      <div className='flex flex-col items-start mt-[10px]'>
        <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>
          Товар уже промаркирован?
          <span className='text-[#E82C15]'>*</span>
        </div>
        <div className='flex mt-[8px] space-x-[8px]'>
          <button
            className={`flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] leading-[1.321rem] items-center justify-center transition duration-300 ease-in-out ${
              isMarked ? 'bg-white text-black' : 'bg-black text-white'
            }`}
            onClick={() => setIsMarked(false)}
          >
            Да
          </button>
          <button
            className={`flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
              isMarked ? 'bg-black text-white' : 'bg-white text-black'
            }`}
            onClick={() => setIsMarked(true)}
          >
            Нет
          </button>
        </div>
      </div>
      <div className='flex flex-col items-start mt-[10px]'>
        <div className={`font-lato font-bold text-[13.005px] leading-[1.118rem] ${!isMarked ? 'text-[#BDBDBD]' : ''}`}>
          Выберите тип маркировки
        </div>
        <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[8px]'>
          <button
            className={`flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
              isMarked ? (selectedMark === 'single' ? 'bg-black text-white' : 'bg-white text-black') : 'bg-white text-[#BDBDBD] pointer-events-none'
            }`}
            onClick={() => handleMarkingButtonClick('single')}
          >
            Одинарная
          </button>
          <button
            className={`flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
              isMarked ? (selectedMark === 'double' ? 'bg-black text-white' : 'bg-white text-black') : 'bg-white text-[#BDBDBD] pointer-events-none'
            }`}
            onClick={() => handleMarkingButtonClick('double')}
          >
            Двойная
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marking;
