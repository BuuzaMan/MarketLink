import React from 'react'
import Blur from './details/blur';
import Corner from './details/corner'
import Discount from './details/discount';
import Sign from './details/Sign';
import Cell from './details/Cell';
import MainSign from './details/MainSign';
import SocialNetwork from './details/SocialNetwork';
import Character from './details/Character';
import Button from './details/Button';


const CharacterBanner = () => {
  return (
    <div className='container relative desktop: desktop:w-[1440px] desktop:h-[820px] mobile:w-[387px] mobile:h-[682px] overflow-hidden'>
         <MainSign />
         <Discount />
         <Button />
         <Character />
         <Sign />
         <Blur />
         <Corner />
         <Cell />
         <SocialNetwork />
    </div>
  )
}

export default CharacterBanner