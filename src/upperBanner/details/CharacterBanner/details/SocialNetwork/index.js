import React from 'react'
import Whatsapp from '../../../../../svg/whatsapp';
import Telega from '../../../../../svg/telega';

const SocialNetwork = () => {
  return (
    <div className='flex flex-col absolute mt-[250px] ml-[310px] desktop:hidden tablet:hidden mobile:flex mobile:bg-white mobile:w-[52px] mobile:h-[113px] mobile:rounded-[734px] top-[px] z-30'>
        <button className='mt-[8px] ml-[8px]'><Telega /></button>
        <button className='mt-[17px] ml-[8px]'><Whatsapp /></button>
    </div>
  )
};

export default SocialNetwork;