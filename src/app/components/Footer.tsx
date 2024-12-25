import Image from 'next/image'
import Link from 'next/link'

export default function Footer () {
  return (
    <div className='w-[95%] gap-10 justify-between pb-10 pt-10  lg:m-0 lg:w-[80%] grid grid-cols-2 xl:grid-cols-4'>
      <div className='flex flex-col  gap-[15px]'>
        <div className='h-[29px] w-[37px] onChild flex gap-2 items-center'>
          <Image
            width={100}
            height={100}
            src='/assets/Images/Logo.png'
            alt={'Logo Image'}
          />
          <h1 className='font-inter font-bold text-[28px] '>whitespace</h1>
        </div>
        <p className='text-[18px] font-inter max-w-[240px] leading-[30px]'>
          whitepace was created for the new ways we live and work. We make a
          better workspace around the world
        </p>
      </div>

      <div className='flex flex-col gap-[15px]'>
        <h1 className='text-[18px] font-bold'>Product</h1>
        <ul className='flex flex-col gap-[15px] '>
          <Link href='/' className='text-[16px] font-medium'>
            Overview
          </Link>
          <Link href='/' className='text-[16px] font-medium'>
            Pricing
          </Link>
          <Link href='/' className='text-[16px] font-medium'>
            Customer stories
          </Link>
        </ul>
      </div>
      <div className='flex flex-col gap-[15px]'>
        <h1 className='text-[18px] font-bold'>Resources</h1>
        <ul className='flex flex-col gap-[15px] '>
          <Link href='/' className='text-[16px] font-medium'>
            Blog
          </Link>
          <Link href='/' className='text-[16px] font-medium'>
            Guides & Tutorials
          </Link>
          <Link href='/' className='text-[16px] font-medium'>
            Help Center
          </Link>
        </ul>
      </div>
      <div className='flex flex-col gap-[15px]'>
        <h1 className='text-[18px] font-bold'>Company</h1>
        <ul className='flex flex-col gap-[15px] '>
          <Link href='/' className='text-[16px] font-medium'>
            About us
          </Link>
          <Link href='/' className='text-[16px] font-medium'>
            Careers
          </Link>
          <Link href='/' className='text-[16px] font-medium'>
            Media Kit
          </Link>
        </ul>
      </div>
    </div>
  )
}
