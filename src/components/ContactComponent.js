import React from 'react';

const ContactComponent = () => {
  return (
    <div id='contacts' className='mt-20 px-4 '>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-full max-w-lg bg-white shadow-lg rounded-lg p-8'>

        <div className='text-center'>
            <h1 className='text-4xl font-bold mb-8'>Contact Us</h1>
        </div>

          <form action='' className='flex flex-col gap-6'>
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>Name</label>
              <input 
                type='text' 
                placeholder='Enter your name' 
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              />
            </div>  

            <div>
              <label className='block text-gray-700 font-semibold mb-2'>Email</label>
              <input 
                type='email' 
                placeholder='Enter your email' 
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-semibold mb-2'>Subject</label>
              <input 
                type='text' 
                placeholder='Enter the subject' 
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-semibold mb-2'>Message</label>
              <textarea 
                placeholder='Enter your message' 
                className='w-full p-3 h-32 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none'
              ></textarea>
            </div>

            <div>
              <button 
                type='submit' 
                className='w-full bg-gray-800 text-white font-semibold py-3 rounded-md hover:bg-blue-900 transition duration-300'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
