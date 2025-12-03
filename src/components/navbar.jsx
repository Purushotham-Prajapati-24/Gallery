import React from 'react'

const navbar = (props) => {
  return (
    <div className='flex items-end justify-between py-2'>
        <div className='flex justify-center translate-x-130'><h1 className='text-5xl font-bold  text-center'>Puru's Gallery</h1></div>
        
        <p className='text-2xl font-bold  text-center px-4'> Page {props.ind}</p>
    </div>
  )
}

export default navbar