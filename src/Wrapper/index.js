import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className='relative h-full container mx-auto w-[1440px]'>{ children }</div>
  )
}

export default Wrapper;