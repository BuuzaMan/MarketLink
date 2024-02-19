import React, { useState } from 'react'
import ZipMenu from './details/zipMenu';

const Package = ({ onPackageSelect, onSizeChange, onReset }) => {
  const [ selectedPackage, setSelectedPackage] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [isBubbleWrapButtonPressed, setIsBubbleWrapButtonPressed] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');


  const handleButtonClick = (value) => {
    setSelectedPackage(value);
    onPackageSelect({ packageType: value, size: selectedSize });
    if (selectedPackage !== value) {
      onReset();
      setSelectedSize('');
    }
    if (value === 'zip') {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    if (value === 'bubbleWrap') {
      setIsBubbleWrapButtonPressed(true);
    } else {
      setIsBubbleWrapButtonPressed(false);
    }
  };
  const handleSizeSelect = (size) => {
    setShowMenu(false);
    setSelectedSize(size);
    onSizeChange(size); 
  };

  return (
    <div className='flex flex-col items-start mt-[10px]'>
        <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>Упаковка</div>
        <div className='grid grid-cols-3 w-[336px] mt-[6px] gap-x-[8px] gap-y-[8px]'>
          <button
            className={`flex w-[164px] h-[42px] relative rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
              selectedPackage === 'zip' ? 'bg-black text-white' : 'bg-white text-black'
            } focus:outline-none focus:bg-black focus:text-white`}
            onClick={() => handleButtonClick('zip')}
          >
            ЗИП-пакет
          </button>
          <button
            className={`flex w-[164px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
              selectedPackage === 'bopp' ? 'bg-black text-white' : 'bg-white text-black'
            } focus:outline-none focus:bg-black focus:text-white ml-[57px]`}
            onClick={() => handleButtonClick('bopp')}
          >
            БОПП-пакет
          </button>
          <button
            className={`flex w-[336px] h-[42px] col-span-3 rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
              selectedPackage === 'bubbleWrap' ? 'bg-black text-white' : 'bg-white text-black'
            } focus:outline-none focus:bg-black focus:text-white`}
            onClick={() => handleButtonClick('bubbleWrap')}
          >
            Воздушно-пузырчатая плёнка
          </button>
          <button
            className={`flex w-[164px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
              selectedPackage === 'sealedSleeve' ? 'bg-black text-white' : 'bg-white text-black'
            } focus:outline-none focus:bg-black focus:text-white`}
            onClick={() => handleButtonClick('sealedSleeve')}
          >
            Запаянный рукав
          </button>
          <button
            className={`flex w-[164px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
              selectedPackage === 'other' ? 'bg-black text-white' : 'bg-white text-black'
            } focus:outline-none focus:bg-black focus:text-white ml-[57px]`}
            onClick={() => handleButtonClick('other')}
          >
            Другое
          </button>
        </div>
        {showMenu && <ZipMenu onSizeSelect={handleSizeSelect} />}
    </div>
  );
}

export default Package;