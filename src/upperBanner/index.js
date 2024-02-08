import React from 'react'
import Cards from './details/Cards/index.js';
import Warranty from './details/Warranty/index.js';
import CharacterBanner from './details/CharacterBanner/index.js'

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
