import React from 'react'

const FooterComponent = () => {
  return (
    <div className='flex justify-center items-center p-10'>
        <p>Copyright &copy; {new Date().getFullYear()} - {new Date().getFullYear() + 1} - By - Zobir Ofkir</p>
    </div>
  )
}

export default FooterComponent  