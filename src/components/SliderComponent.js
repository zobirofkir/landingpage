import React from 'react'

const SliderComponent = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen shadow-md bg-gradient-to-r from-gray-300 to-white'>
        <div>
            <h1 className='text-3xl font-bold whitespace-wrap text-center'>
                Hello World Hello World Hello World 
              <br className='my-5'/>
                Hello World Hello  
            </h1>
        </div>

        <div>
            <p className='text-center text-lg font-semibold whitespace-wrap'> Hello World Hello World Hello World Hello World Hello World Hello World  </p>
        </div>

        <div className='flex justify-between items-center gap-5'>
            <button className='bg-green-950 text-white px-4 py-2 rounded-md font-bold'>Get Started</button>
            <button className='shadow-md text-black px-4 py-2 rounded-md font-bold'>Try Demo</button>
        </div>
    </div>
  )
}

export default SliderComponent