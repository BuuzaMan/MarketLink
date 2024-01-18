import React from 'react'

const Pricing = () => {
  return (
    <div className='absolute overflow-hidden flex flex-col w-[312px] h-[303px] bg-white'>
        <div className='flex mt-[31px] ml-[29px]'>
            <div className='flex'>
                <div className='font-gothic font-normal text-[17.021px] leading-[0.926rem] tracking-[.16em]'>MARKET</div>
                <div className='font-macan font-normal text-[15px] leading-[0.926rem] tracking-[.16em]'>LlNK</div>
            </div>
            <div className='w-[1px] h-[12.5px] bg-[#C0C0C0] ml-[13px]' />
            <div className='font-sfpro font-medium text-[19px] leading-[0.926rem] -tracking-[.024em] ml-[10px]' style={{ backgroundImage: 'linear-gradient(92deg, #EB1988 4.78%, #005AF9 100%)', backgroundClip: 'text', color: 'transparent' }}>Прайсинг</div>
        </div>
        <div className='mt-[28px] ml-[29px]'>
            <div className='font-sfpro font-medium text-[20px] leading-1.25rem] -tracking-[.025em]'>Логистика</div>
            <div className='w-[612px] mt-[17px]'>
                <div className='font-sfpro font-medium text-[12px] text-[#828282] leading-[0.75rem] -tracking-[.015em]'>Забор товара до 1м³ (КАРГО, рынки: Садовод, ТЯК, Южныеворота и др.)</div>
                <div className='w-[301px] h-[1px] bg-[#C0C0C0] mt-[17px]' />
                <div className='font-sfpro font-medium text-[12px] text-[#828282] leading-[0.75rem] -tracking-[.015em] mt-[17px]'>Забор товара от 1м³ до 4м³(КАРГО, рынки: Садовод, ТЯК, Южные ворота и др.)</div>
                <div className='w-[301px] h-[1px] bg-[#C0C0C0] mt-[17px]' />
                <div className='font-sfpro font-medium text-[12px] text-[#828282] leading-[0.75rem] -tracking-[.015em] mt-[17px]'>Забор товара от 4м³ (КАРГО, рынки: Садовод, ТЯК, Южныеворота и др.)</div>
                <div className='w-[301px] h-[1px] bg-[#C0C0C0] mt-[17px]' />
            </div>
        </div>
    </div>
  )
};

export default Pricing;
