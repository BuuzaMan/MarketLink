import React, { useState } from 'react';

const Select = () => {
  const categories = ["Одежда", "Хозяйственные товары", "Poizon", "Электроника", "Прочее"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <select id="category" value={selectedCategory} onChange={handleChange} className="mt-[18px] w-[254px] h-[64px] rounded-[12.173px] outline-none">
        {categories.map((category, index) => (
          <option key={index} value={category} className='w-[254px] outline-none rounded-[12.173px] h-[600px]'>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;