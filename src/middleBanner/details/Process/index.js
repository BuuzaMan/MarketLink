import React from 'react'
import First from './detail/first';
import Second from './detail/second';
import Third from './detail/third';
import Fourth from './detail/fourth';

const Process = () => {
  return (
    <div className='flex flex-col items-center desktop:w-[1208px] mobile:w-[386px] desktop:h-[1192px] desktop:mt-[120px] mobile:mt-[80px]'>
        <div className='desktop:w-[841px] text-center mobile:w-[300px] font-sfpro font-medium desktop:text-[64px] mobile:text-[40px] desktop:leading-[4rem] mobile:leading-[2.5rem] desktop:-tracking-[.08em] mobile:-tracking-[.05em]'>Прозрачный процесс работы</div>
        <div className='desktop:grid desktop:grid-cols-2 mobile:flex mobile:flex-col  desktop:w-[1208px] mobile:w-[386px] desktop:h-[500px] desktop:mt-[40px] mobile:mt-[20px] desktop:gap-x-6 desktop:gap-y-6 mobile:gap-y-5 items-center'>
          <First />
          <Second />
          <Third />
          <Fourth />
        </div>
    </div>
  )
};

export default Process;
