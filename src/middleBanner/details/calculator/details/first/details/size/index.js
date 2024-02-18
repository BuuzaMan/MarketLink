import React from 'react';

const Size = ({ onSizeChange }) => {
  const [length, setLength] = React.useState('');
  const [width, setWidth] = React.useState('');
  const [height, setHeight] = React.useState('');

  const handleLenghtChange = (event) => {
    const newLenght = event.target.value;
    setLength(newLenght);
    onSizeChange({ length: Number(newLenght), width, height });
  };

  const handleWidthChange = (event) => {
    const newWidth = event.target.value;
    setWidth(newWidth);
    onSizeChange({ length, width: Number(newWidth), height });
  };

  const handleHeightChange = (event) => {
    const newHeight = event.target.value;
    setHeight(newHeight);
    onSizeChange({ length, width, height: Number(newHeight) });
  };

  return (
    <div>
      <div className='font-lato font-bold text-[13px] leading-[1rem] w-[120px] h-[18px]'>
        Размер товара
        <span className='text-[#E82C15]'>*</span>
      </div>
      <div className='flex mt-[8px] gap-x-[7px]'>
        <input
          type='text'
          value={length}
          onChange={(e) => handleLenghtChange(e)}
          className='w-[50px] h-[42px] rounded-[6px] border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-4 font-lato text-[14.63px] leading-[1.321rem] text-[#262C31]'
          placeholder='Д'
        />
        <input
          type='text'
          value={width}
          onChange={(e) => handleWidthChange(e)}
          className='w-[50px] h-[42px] rounded-[6px] border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-4 font-lato text-[14.63px] leading-[1.321rem] text-[#262C31]'
          placeholder='Ш'
        />
        <input
          type='text'
          value={height}
          onChange={(e) => handleHeightChange(e)}
          className='w-[50px] h-[42px] rounded-[6px] border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-4 font-lato text-[14.63px] leading-[1.321rem] text-[#262C31]'
          placeholder='В'
        />
      </div>
    </div>
  );
};

export default Size;