import React, { useState } from 'react'

const Warehouse = () => {
  const [selectedMarketplace, setSelectedMarketplace] = useState('ВБ');
  const [showWarehouseBlock, setShowWarehouseBlock] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState('');

  const handleMarketplaceSelect = (marketplace) => {
    setSelectedMarketplace(marketplace);
    setShowWarehouseBlock(marketplace === 'ВБ');
    setSelectedWarehouse('');
  };

  const handleWarehouseSelect = (warehouse) => {
    setSelectedWarehouse(warehouse);
  };
  return (
    <div>
        <div className='flex flex-col mt-[18px]'>
        <div className='flex flex-col items-start'>
            <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>На какой маркетплейс планируется отгрузка</div>
            <div className='flex w-[336px] h-[43px] mt-[8px] space-x-[10px]'>
                <button
                    className={`flex w-[105px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white ${selectedMarketplace === 'ВБ'}`}
                    onClick={() => handleMarketplaceSelect('ВБ')}>
                    ВБ
                </button>
                <button
                    className={`flex w-[105px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white ${selectedMarketplace === 'Озон'}`}
                    onClick={() => handleMarketplaceSelect('Озон')}>
                    Озон
                </button>
                <button
                    className={`flex w-[105px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white ${selectedMarketplace === 'Яндекс'}`}
                    onClick={() => handleMarketplaceSelect('Яндекс')}>
                    Яндекс
                </button>
            </div>
        </div>
        
        {showWarehouseBlock && (
            <div className='flex flex-col items-start mt-[24px]'>
                <div className='font-lato font-bold text-[13.005px] leading-[1.118rem]'>На какой склад планируется отгрузка</div>
                <div className='flex flex-wrap w-[336px] h-[43px] mt-[8px] gap-x-[8px] gap-y-[8px]'>
                    <button
                        className={`flex w-[97px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white ${selectedWarehouse === 'Коледино'}`}
                        onClick={() => handleWarehouseSelect('Коледино')}
                        >
                        Коледино
                    </button>
                    <button
                        className={`flex w-[130px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white ${selectedWarehouse === 'Электросталь'}`}
                        onClick={() => handleWarehouseSelect('Электросталь')}
                        >
                        Электросталь
                    </button>
                    <button
                        className={`flex w-[93px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white ${selectedWarehouse === 'Алексин'}`}
                        onClick={() => handleWarehouseSelect('Алексин')}
                        >
                        Алексин
                    </button>
                    <button
                        className={`flex w-[97px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white ${selectedWarehouse === 'Казань'}`}
                        onClick={() => handleWarehouseSelect('Казань')}
                        >
                        Казань
                    </button>
                    <button
                        className={`flex w-[130px] h-[42px] rounded-md border-[#E8E8E8] border-[0.813px] font-lato text-[14.63px] items-center justify-center transition duration-300 ease-in-out bg-white text-black focus:outline-none focus:bg-black focus:text-white ${selectedWarehouse === 'Уткина Заводь'}`}
                        onClick={() => handleWarehouseSelect('Уткина Заводь')}
                        >
                        Уткина Заводь
                    </button>
                </div>
            </div>)}
        </div>
    </div>
  )
};

export default Warehouse;