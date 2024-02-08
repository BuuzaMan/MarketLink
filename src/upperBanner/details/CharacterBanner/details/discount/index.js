import React from 'react'

const Discount = () => {
  return (
    <div className='flex desktop:flex tablet:flex mobile:hidden mt-[20px] desktop:ml-[501px]' style={{ backgroundImage: 'linear-gradient(92deg, #EB1988 4.78%, #005AF9 100%)', backgroundClip: 'text', color: 'transparent' }}>
        <div className='font-fira text-[32px] font-bold leading-8'>Скидка 20%&nbsp;</div>
        <div className='font-fira text-[32px] font-normal leading-8'>на первый заказ</div>
    </div>
  )
}

export default Discount;