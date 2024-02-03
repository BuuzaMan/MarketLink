import React from 'react'
import GradientBox from '../../../../../../svg/gradientBox'

const Freight = () => {
  return (
    <div className='flex flex-col desktop:w-[284px] mobile:w-[284px] desktop:h-[473px] mobile:h-[473px] rounded-[12.84px] bg-[#FFFFFF]'>
        <div className='mt-[33px] ml-[32px]'><GradientBox /></div>
        <div className='desktop:mt-[24px] desktop:ml-[32px] mobile:mt-[24px] mobile:ml-[32px] font-sfpro mr-[32px]'>
            <div className='w-[180px] h-[48px] font-bold text-[24px] leading-[1.5rem] -tracking-[.03em]'>Забор товара день в день</div>
            <div className='desktop:w-[220px] desktop:h-[210px] mobile:w-[230px] mobile:h-[210px] mt-[16px] font-normal text-[16px] text-[#4F4F4F] leading-[1.3rem] tracking-[.04em]'>
                <div>Садовод, ТЯК, Карго, либо примем ваш груз от транспортной компании.</div>
                <div className='mt-[20px]'>Вывезем с СЦ Южные Ворота и Дзержинский, чтобы вы не переплачивали за хранение.</div>
                <div className='mt-[20px]'>Любые объемы от 10 шт.</div>
            </div>
        </div>
    </div>
  )
}

export default Freight