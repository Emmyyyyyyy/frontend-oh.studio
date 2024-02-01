import { useState } from 'react'
import { Link } from 'react-router-dom'

type NavbarOption = 'Home' | 'Contact'

export default function Navbar() {
  const [selectedOption, setSelectedOption] =
    useState<NavbarOption>('Home')

  const handleOptionClick = (option: NavbarOption) => {
    setSelectedOption(option)
  }

  return (
    <div className='px-[40px] py-[30px] w-full flex justify-center fixed top-0 md:p-[20px]'>
      <div className='w-[300px] md:w-[280px] h-[48px] p-[4px] bg-custom-bg flex justify-between gap-[4px] rounded-full backdrop-blur-[16px]'>
        <div
          className={`flex-1 flex items-center justify-center rounded-full cursor-pointer ${
            selectedOption === 'Home' ? 'bg-white' : ''
          }`}
          onClick={() => handleOptionClick('Home')}
        >
          <Link to='/'>Home</Link>
        </div>
        <div
          className={
            'flex-1 flex items-center justify-center rounded-[100px] cursor-pointer'
          }
        >
          <p>Profile</p>
        </div>
        <div
          className={`flex-1 flex items-center justify-center rounded-[100px] cursor-pointer ${
            selectedOption === 'Contact' ? 'bg-white' : ''
          }`}
          onClick={() => handleOptionClick('Contact')}
        >
          <Link to='/Contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}
