import React, { useState } from 'react';
import VectorUp from '../../../../svg/vectorUp';

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
    <div className="inline-block text-center mt-[16px] relative">
      <div>
        <button
          type="button"
          className="inline-flex font-bold w-[245px] h-[64px] rounded-xl bg-white focus:outline-none transition duration-300 relative"
          onClick={toggleMenu}
        >
          <div className='mt-[22px] ml-[23px]'>{selectedCategory}</div>
          {selectedCategory && !isMenuOpen && (
            <div className="absolute left-[200px] top-[26px]">
              <div className='rotate-180'><VectorUp /></div>
            </div>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute w-[245px] rounded-xl -top-[0px] shadow-lg bg-white z-40">
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