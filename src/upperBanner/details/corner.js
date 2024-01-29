import React from 'react'
import Circle from './circle';

const Corner = () => {
  return (
    <div>
        <div className='flex absolute top-[382.83px] ml-[456.44px]'><Circle /></div>
        <div className='flex absolute top-[744.96px] ml-[456.44px]'><Circle /></div>
        <div className='flex absolute top-[382.83px] ml-[991.83px]'><Circle /></div>
        <div className='flex absolute top-[744.96px] ml-[991.83px]'><Circle /></div>
    </div>
  )
};

export default Corner;
