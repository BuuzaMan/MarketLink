import React, { useState } from 'react';
import VectorUp from '../../../../../../svg/vectorUp'

const Select = () => {
  const categories = ['Одежда', 'Хозяйственные товары', 'Poizon', 'Электроника', 'Прочее'];
  const [selectedCategory, setSelectedCategory] = useState('Одежда');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);
  };

  return (
    <div className="inline-block text-center relative">
      <div>
        <button
          type="button"
          className="inline-flex font-bold desktop:w-[245px] mobile:w-[144px] desktop:h-[64px] mobile:h-[37.4px] desktop:rounded-xl mobile:rounded-[7.115px] bg-white focus:outline-none transition duration-300 relative"
          onClick={toggleMenu}
        >
          <div className='desktop:mt-[22px] mobile:mt-[10px] desktop:ml-[23px] mobile:ml-[12.57px] desktop:text-[16px] mobile:text-[10px]'>{selectedCategory}</div>
          {selectedCategory && !isMenuOpen && (
            <div className="absolute desktop:left-[200px] mobile:left-[120px] desktop:top-[22px] mobile:top-[12px]">
              <div className='rotate-180'><VectorUp /></div>
            </div>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute desktop:w-[245px] mobile:w-[144px] rounded-xl top-0 shadow-lg bg-white z-40">
          <div className="">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleSelect(category)}
                className="flex px-[23px] py-[22px] text-center font-bold relative"
              >
                {category}
                {selectedCategory === 'Одежда' && selectedCategory === category && (
                  <div className="absolute left-[200px] top-[25px]">
                    <VectorUp />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;