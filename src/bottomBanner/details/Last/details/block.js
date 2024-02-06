import React from 'react'

const Block = () => {
  return (
    <div className='flex flex-col desktop:w-[592px] mobile:w-[346px] desktop:h-[592px] mobile:h-[780px]'>
        <div className='font-medium desktop:w-[553px] mobile:w-[346px] mobile:h-[160px] desktop:text-[48px] mobile:text-[40px] leading-[3rem] -tracking-[.06em] w-[553px] h-[144px] mobile:text-center'>
            <div>Фулфилмент,</div>  
            <div>который создан</div>
            <div>селлерами для селлеров</div>
        </div>
        <div className='desktop:w-[592px] desktop:h-[224px] mobile:w-[346px] mobile:h-[321px] rounded-[10.266px] shadow-[0_3px_6.7px_4px_rgba(7,22,61,0.05);]'> 
            <div className='ml-[38px] mt-[34px] desktop:w-[526px] mobile:w-[266px] desktop:h-[155px] mobile:h-[251px]'>
                <div className=''>😊</div>
                <div className='text-[18.25px] leading-[1.483rem] tracking-[.046em] text-[#333333]'>Мы не понаслышке знаем, с какими проблемами вам приходится сталкиваться при организации поставки, поэтому мы создали сервис, который поможет их избежать.Изучили лучшие практики фулфилментов и внедрили их у себя.</div>
            </div>    
        </div>
        <div className='desktop:w-[592px] mobile:w-[346px] desktop:h-[168.8px] mobile:h-[251px] rounded-[10.266px] shadow-[0_3px_6.7px_4px_rgba(7,22,61,0.05);] mt-[13px]'>
            <div className='mt-[31.94px] ml-[37.64px]'>
                <div className=''>😊</div>
                <div className='text-[18.25px] leading-[1.483rem] tracking-[.046em] text-[#333333]'> Внимательное отношение к каждому селлеру помогает нам успешно работать на рост вашей выручки и операционной прибыли. Мы знаем, вам есть чем заняться.</div>
            </div>
        </div>
    </div>
  )
}

export default Block;