import React from 'react';

const ZipMenu = ({ onSizeSelect }) => {
  const zipOptions = ['15*20', '20*25', '20*30', '25*35', '30*40', '35*45', '40*50', '50*60', '50*70'];

  const handleSizeClick = (size) => {
    onSizeSelect(size);
  };

  return (
    <div className='absolute w-[164px] h-[250px] bg-black text-white font-lato text-[14.63px] border-[#E8E8E8] border-[0.813px] rounded-md text-center top-[183px]'>
      <p className='mt-[10px]'>Выберите размер:</p>
      <ul className='mt-[10px]'>
        {zipOptions.map((size, index) => (
          <li key={index} onClick={() => onSizeSelect(size)}><button>{size}</button></li>
        ))}
      </ul>
    </div>
  );
};

export default ZipMenu;