import React from 'react'

const AboutComponent = () => {
  return (
    <div id='about' className='mt-20'>
        <h1 className='text-center text-3xl font-bold'>
            About Us
        </h1>
        <div className='flex justify-center items-center h-screen'>
            <div className='flex md:flex-row flex-col justify-between items-center gap-5 md:px-10 px-5 -mt-20'>
                <div className='md:w-1/2 w-full'>
                    <img src="https://picsum.photos/900/600" className='w-full h-full rounded' alt='About'/>
                </div>

                <div className='md:w-1/2 w-full text-center'>
                    <h1 className='text-3xl font-bold'> About US</h1>
                    <p className='text-lg'>
                        Web development service Web development service Web development service
                        Web development service Web development service Web development service
                        Web development service Web development service Web development service
                        Web development service Web development service Web development service
                        Web development service Web development service Web development service
                        Web development service Web development service Web development service
                        Web development service Web development service Web development service
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutComponent