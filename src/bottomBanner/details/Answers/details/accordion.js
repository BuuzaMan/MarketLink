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
        <div key={index} className="desktop:w-[1208px] mobile:w-[346px]">
          <div className='desktop:w-[1208px] mobile:w-[346px] h-[1px] bg-[#C0C0C0] mb-[28px]' />
          <button
            onClick={() => toggleSection(index)}
            className="desktop:w-[995px] mobile:w-[328px] desktop:h-[48px] font-normal desktop:text-[48px] mobile:text-[32px] leading-[3rem] -tracking-[.06em] text-left mb-[28px]"
          >
          <div className={`absolute desktop:ml-[1185px] mobile:ml-[324px] mt-[10px] transition-transform transform ${openSection === index ? 'rotate-180' : ''}`}><Arrow /></div>
            {section.title}
          </button>
          {openSection === index && (
            <div className="">
              <p className='className="font-normal desktop:text-[48px] mobile:text-[32px] text-[#828282] leading-[3rem] -tracking-[.06em]'>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;