import React, { useState } from 'react'

const Quantity = (props) => {
  const [quantity, setQuantity] = useState('');

  const handleInputChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
    props.onQuantityChange({ quantity: newQuantity });
  };
  return (
    <div>
        <div className='flex font-lato font-bold text-[13px] leading-[1rem] h-[18px]'>
            Количество товара
            <span className='text-[#E82C15]'>*</span>
        </div>

        <div className='flex mt-[8px]'>
            <input
                type='text'
                value={quantity}
                onChange={handleInputChange}
                className='w-[164px] h-[42px] rounded-md border-[0.813px] border-[#E8E8E8] bg-[#FAFAFA] px-4 font-lato text-[14.63px] leading-[1.321rem] text-[#262C31]'
                placeholder='1000'
            />
        </div>
    </div>  
  )
}

export default Quantity;