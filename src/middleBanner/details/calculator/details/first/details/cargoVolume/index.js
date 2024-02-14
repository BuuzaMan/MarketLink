import React, { useState } from 'react'

const CargoVolume = ( {onCargoVolumeChange} ) => {
  const [choice, setChoice] = useState('more');

  const handleButtonClick = (value) => {
    setChoice(value);
    if (value === 'one') {
      onCargoVolumeChange( 1650 );
    } else if (value === 'four') {
      onCargoVolumeChange( 3000 );
    } else if (value === 'more') {
      onCargoVolumeChange( 4000 );
    }
   
    
  }
  return (
    <div className='mt-[10px]'>
        <div>
            <div className='font-lato text-[13.005px] font-bold leading-[1.118rem]'>
                Объем груза
                <span className='text-[#E82C15]'>*</span>
                <span className='italic font-normal text-[#787878]'>&nbsp;(Можно узнать из накладной)</span>
            </div>
        </div>
        <div className='flex mt-[8px] space-x-[6px]'>
        <button
          className={`flex w-[108px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] leading-[1.321rem] items-center justify-center transition duration-300 ease-in-out ${
            choice === 'one' ? 'bg-black text-white' : 'bg-white text-black'
          } focus:outline-none focus:bg-black focus:text-white`}
          onClick={() => handleButtonClick('one')}
        >
          До 1м³
        </button>
        <button
          className={`flex w-[108px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
            choice === 'four' ? 'bg-black text-white' : 'bg-white text-black'
          } focus:outline-none focus:bg-black focus:text-white`}
          onClick={() => handleButtonClick('four')}
        >
          1-4м³
        </button>
        <button
          className={`flex w-[108px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
            choice === 'more' ? 'bg-black text-white' : 'bg-white text-black'
          } focus:outline-none focus:bg-black focus:text-white`}
          onClick={() => handleButtonClick('more')}
        >
          Более 4м³
        </button>
        </div>
    </div>
  )
}

export default CargoVolume;