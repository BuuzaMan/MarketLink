import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


const Maps = () => {
  return (
    <div className='desktop:w-[512px] mobile:w-[299px] desktop:h-[412px] mobile:h-[259px] rounded-[16px] desktop:mt-[35px] mobile:mt-[21px] desktop:ml-[40px] mobile:ml-[23.3px] rounded-2xl'>
        <YMaps>
            <Map
                defaultState={{center: [55.704585, 37.834507],zoom: 10,}}
                className='w-full h-full rounded-2xl'>
                <Placemark geometry={[55.704585, 37.834507]} />
            </Map>
        </YMaps>
    </div>
  )
}

export default Maps