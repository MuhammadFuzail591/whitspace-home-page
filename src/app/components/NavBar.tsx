'use client'
import { useState } from 'react'
import { Button } from './Button'
import { IoMdMenu } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

import Link from 'next/link'

export default function NavBar () {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex items-center'>
      <nav className='flex items-center justify-between gap-[48px] xl:gap-52'>
        <ul className='hidden md:flex list-none gap-[18px] lg:gap-[32px]'>
          <Link href='/' className='text-[18px] font-medium'>
            Products
          </Link>
          <Link href='/' className='text-[18px] font-medium'>
            Solutions
          </Link>
          <Link href='/' className='text-[18px] font-medium'>
            Resources
          </Link>
          <Link href='/' className='text-[18px] font-medium'>
            Pricing
          </Link>
        </ul>
        <Button
          classes='hidden md:flex text-[16px] lg:text-[18px] py-[12px] px-[30px] lg:py-[16px] lg:px-[40px] bg-[#FFE492] text-[#043873]'
          text='Login'
        />
        <div className='md:hidden' onClick={() => setIsOpen(true)}>
          <IoMdMenu className='text-3xl' />
        </div>
      </nav>

      <div
        className={`fixed md:hidden top-0 right-0 py-6 bg-white text-[#043873] w-3/4 sm:w-1/2 h-screen shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-end px-6' onClick={() => setIsOpen(false)}>
          <IoClose className='text-3xl cursor-pointer' />
        </div>
        <ul className='flex flex-col list-none gap-4 lg:gap-[32px] mt-6'>
          <Link
            href='/'
            className='text-[18px] p-4 font-bold hover:shadow-2xl hover:ml-2 transition-all'
            onClick={() => {
              setIsOpen(false)
            }}
          >
            Products
          </Link>
          <Link
            href='/'
            className='text-[18px] p-4 font-bold hover:shadow-2xl hover:ml-2 transition-all'
            onClick={() => {
              setIsOpen(false)
            }}
          >
            Solutions
          </Link>
          <Link
            href='/'
            className='text-[18px] p-4 font-bold hover:shadow-2xl hover:ml-2 transition-all'
            onClick={() => {
              setIsOpen(false)
            }}
          >
            Resources
          </Link>
          <Link
            href='/'
            className='text-[18px] p-4 font-bold hover:shadow-2xl hover:ml-2 transition-all'
            onClick={() => {
              setIsOpen(false)
            }}
          >
            Pricing
          </Link>
        </ul>
      </div>
    </div>
  )
}
