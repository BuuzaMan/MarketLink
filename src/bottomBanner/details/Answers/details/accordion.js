import React, { useState } from 'react';
import Arrow from '../../../../svg/arrow';

const Accordion = () => {
  const accordionData = [
    { title: "Как часто отвозите на FBS?", content: "Мы в курсе данной проблемы и работаем над её устранением" },
    { title: "На какие склады в Москве отправляете?", content: "Мы в курсе данной проблемы и работаем над её устранением" },
    { title: "На какие региональные склады поставляете?", content: "Мы в курсе данной проблемы и работаем над её устранением" },
    { title: "Как вы гарантируете сохранность моего товара?", content: "Мы в курсе данной проблемы и работаем над её устранением" },
  ];

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="">
      {accordionData.map((section, index) => (
        <div key={index} className="mt-[28px] w-[1208px]">
          <div className='w-[1208px] h-[1px] bg-[#C0C0C0] mt-[28px]' />
          <button
            onClick={() => toggleSection(index)}
            className="font-normal text-[48px] leading-[3rem] -tracking-[.06em] mt-[28px]"
          >
          <div className={`absolute ml-[1185px] mt-[10px] transition-transform transform ${openSection === index ? 'rotate-180' : ''}`}><Arrow /></div>
            {section.title}
          </button>
          {openSection === index && (
            <div className="bg-white">
              <p className='className="font-normal text-[48px] text-[#828282] leading-[3rem] -tracking-[.06em] mt-[28px]'>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;