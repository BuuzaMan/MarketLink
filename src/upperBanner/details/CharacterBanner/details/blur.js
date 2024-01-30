import React from 'react'

const Blur = () => {
  return (
    <div className='desktop:w-[1440px] tablet:w-[1024px] mobile:w-[387px]'>
        <img src="/images/Ellipse1.png" alt='blurbg1' className='absolute desktop:blur-[90px] tablet:blur-[100px] mobile:blur-[100px] desktop:ml-[590.82px] desktop:top-[420px] mobile:ml-[30px] mobile:top-[380px] z-0 w-[348px] h-[348px]'/>
        <img src="/images/Ellipse2.png" alt='blurbg2' className='absolute desktop:blur-[90px] tablet:blur-[100px] mobile:blur-[100px] desktop:ml-[230px] desktop:top-[720px] mobile:-ml-[150px] mobile:top-[498px] z-0'/>
        <img src="/images/Ellipse3.png" alt='blurbg3' className='absolute desktop:blur-[90px] tablet:blur-[100px] mobile:blur-[100px] desktop:ml-[880.82px] desktop:top-[703px] z-0 w-[196px] mobile:top-[400px] mobile:ml-[250px]'/>
    </div>
  )
};

export default Blur;
