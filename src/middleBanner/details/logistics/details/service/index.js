import React from 'react'
import Freight from './details/freight';
import Packing from './details/packing';
import Marking from './details/marking';
import Delivery from './details/delivery';

const Service = () => {
  return (
    <div className='flex desktop:w-[1208px] mobile:w-[346px] mobile:overflow-x-scroll mobile:scrollbar-hide gap-x-6 mt-[40px]'>
        <Freight />
        <Packing />
        <Marking />
        <Delivery />
    </div>
  )
};

export default Service;
