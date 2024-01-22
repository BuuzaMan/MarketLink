import React from 'react'
import Mosaic from './details/mosaic';

const Last = () => {
  return (
    <div className='flex w-[1208px] items-center mt-[120px] font-sfpro gap-x-6'>
        <div><Mosaic /></div>
        <div className='flex flex-col w-[592px] h-[560px]'>
            <div className='font-medium text-[48px] leading-[3rem] -tracking-[.06em] w-[553px] h-[144px]'>Фулфилмент, который создан селлерами для селлеров</div>
            <div className='w-[592px] h-[224px] rounded-[10.266px] shadow-[0_3px_6.7px_4px_rgba(7,22,61,0.05);] mt-[13px]'> 
                <div className='ml-[38px] mt-[34px] w-[526px] h-[155px] '>
                    <div className=''>😊</div>
                    <div className='text-[18.25px] leading-[1.483rem] tracking-[.046em] text-[#333333]'>Мы не понаслышке знаем, с какими проблемами вам приходится сталкиваться при организации поставки, поэтому мы создали сервис, который поможет их избежать.Изучили лучшие практики фулфилментов и внедрили их у себя.</div>
                </div>    
            </div>
            <div className='w-[592px] h-[168.8px] rounded-[10.266px] shadow-[0_3px_6.7px_4px_rgba(7,22,61,0.05);] mt-[13px]'>
                <div className='mt-[31.94px] ml-[37.64px]'>
                    <div className=''>😊</div>
                    <div className='text-[18.25px] leading-[1.483rem] tracking-[.046em] text-[#333333]'> Внимательное отношение к каждому селлеру помогает нам успешно работать на рост вашей выручки и операционной прибыли. Мы знаем, вам есть чем заняться.</div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Last;