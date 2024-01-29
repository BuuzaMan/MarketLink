import React from 'react'
import Cards from './details/Cards';
import Warranty from './details/Warranty';
import CharacterBanner from './details/CharacterBanner';

const UpperBanner = () => {
  return (
    <div className='container flex flex-col items-center justify-center relative overflow-hidden'>
        <CharacterBanner />
        <Cards />
        <Warranty />
    </div>
    
  )
};

export default UpperBanner;
