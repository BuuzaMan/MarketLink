import React, { useState, useEffect } from 'react';

export const calculateVolume = (length, width, height) => {
    const lengthValue = parseInt(length, 10) || 0;
    const widthValue = parseInt(width, 10) || 0;
    const heightValue = parseInt(height, 10) || 0;

    const volume = lengthValue * widthValue * heightValue;

    return volume;
};

const Size = ({ onSizeChange }) => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    useEffect(() => {
        const calculatedVolume = calculateVolume(length, height, width);
        onSizeChange({ calculatedVolume });
    }, [length, width, height, onSizeChange]);

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
                    onChange={(e) => setLength(e.target.value)}
                    className='w-[50px] h-[42px] rounded-[6px] border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-4 font-lato text-[14.63px] leading-[1.321rem] text-[#262C31]'
                    placeholder='Д'
                />
                <input
                    type='text'
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className='w-[50px] h-[42px] rounded-[6px] border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-4 font-lato text-[14.63px] leading-[1.321rem] text-[#262C31]'
                    placeholder='Ш'
                />
                <input
                    type='text'
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className='w-[50px] h-[42px] rounded-[6px] border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-4 font-lato text-[14.63px] leading-[1.321rem] text-[#262C31]'
                    placeholder='В'
                />
            </div>
        </div>
    );
};

export default Size;