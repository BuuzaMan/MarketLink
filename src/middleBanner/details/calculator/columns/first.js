import React, { useState } from 'react'

const First = () => {
    const [isMarked, setIsMarked] = useState(false);
    const [ selectedMark, setSelectedMark ] = useState('single');

    
  return (
    <div className='flex flex-col mt-[17px] ml-[35px] w-[336px] h-[419px]'>
        <div className='w-[37px] font-lato text-[13px] font-bold leading-[1.376rem] bg-gradient-to-r from-[#EB1988] to-[#005AF9] inline-block text-transparent bg-clip-text'>Шаг 1</div>
            <div className='flex flex-row w-[236px] h-[68px] gap-x-2 mt-[]'>
                <div>
                    <div className='flex font-lato font-bold text-[13px] leading-[1rem] h-[18px]'>
                        Количество товара
                        <span className='text-[#E82C15]'>*</span>
                    </div>

                    <div className='flex mt-[8px]'>
                        <input
                            type='text'
                            className='w-[164px] h-[42px] rounded-md border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-4 font-lato text-[14.63px] leading-[1.321rem] text-[#262C31]'
                            placeholder='1000'
                        />
                    </div>
                </div>   
                <div>
                    <div className='font-lato font-bold text-[13px] leading-[1rem] w-[120px] h-[18px]'>
                        Размер товара
                        <span className='text-[#E82C15]'>*</span>
                    </div>
                    <div className='flex mt-[8px] gap-x-[7px]'>
                        <input
                            type='text'
                            className='w-[50px] h-[42px] rounded-[6px] border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-4 font-lato text-[14.63px] leading-[1.321rem] text-[#262C31]'
                            placeholder='Д'
                        />
                          <input
                            type='text'
                            className='w-[50px] h-[42px] rounded-[6px] border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-4 font-lato text-[14.63px] leading-[1.321rem] text-[#262C31]'
                            placeholder='Ш'
                        />
                          <input
                            type='text'
                            className='w-[50px] h-[42px] rounded-[6px] border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-4 font-lato text-[14.63px] leading-[1.321rem] text-[#262C31]'
                            placeholder='В'
                        />
                    </div>
                </div> 
            </div>
        <div className='mt-[10px]'>
            <div className='flex font-lato font-bold text-[13px] leading-[1.118rem]'>
                Потребуется ли забор товара?
                <span className='text-[#E82C15]'>*</span>
            </div>
            <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[8px]'>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Карго/Рынок</button>
                <button className='flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Нет</button>
            </div>
        </div>
        <div>
            <div className='flex mt-[10px]'>
                <div className='font-lato text-[13.005px] font-bold leading-[1.118rem]'>
                    Объем груза
                    <span className='text-[#E82C15]'>*</span>
                    <span className='italic font-normal text-[#787878]'>&nbsp;(Можно узнать из накладной)</span>
                </div>
            </div>
            <div className='flex mt-[8px] space-x-[6px]'>
                <button className='flex w-[108px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] leading-[1.321rem] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>До 1м³</button>
                <button className='flex w-[108px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>1-4м³</button>
                <button className='flex w-[108px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white'>Более 4м³</button>
            </div>
        </div>
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
                        onClick={() => setSelectedMark('single')}
                    >
                        Одинарная
                    </button>
                    <button
                        className={`flex w-[164px] h-[43px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out ${
                            isMarked ? (selectedMark === 'double' ? 'bg-black text-white' : 'bg-white text-black') : 'bg-white text-[#BDBDBD] pointer-events-none'
                        }`}
                        onClick={() => setSelectedMark('double')}
                    >
                        Двойная
                    </button>
                </div>
        </div>
    </div>
  );
};

export default First;
