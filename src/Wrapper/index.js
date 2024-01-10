import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className='relative h-full container mx-auto'>{ children }</div>
  )
}

export default Wrapper;