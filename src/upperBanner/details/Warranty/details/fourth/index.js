import React from 'react'
import Photo from '../../../../../svg/photo';

const Fourth = () => {
  return (
    <div className='flex flex-col rounded-xl bg-white w-[265px] h-[252px] shadow-[0px_2.161px_127.704px_0px_rgba(7,22,61,0.12)]'>
        <div className='ml-[23px] mt-[23px]'><Photo /></div>
        <div className='w-[180px] h-[38px] mt-[25px] ml-[23px] font-sfpro font-bold text-[18.692px] leading-[1.168rem]'>Предоставляем видео и фото отчеты</div>
        <div className='w-[200px] h-[108px] mt-[8px] ml-[23px] font-sfpro font-normal text-[14px] text-[#4F4F4F] leading-[1.138rem]'>Снимаем процесс забора и отгрузки, а также обработки товара. У вас всегда есть фото и видео доказательства в случае возникновения спорных ситуаций.</div>
    </div>
  )
}

export default Fourth;