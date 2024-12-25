import Image from 'next/image'
import NavBar from './NavBar'

export default function Header () {
  return (
    <header className='h-[92px] w-[95%] lg:m-0 lg:w-[80%] flex items-center justify-between'>
      <div className='h-[29px] w-[37px] onChild flex gap-2 items-center'>
        <Image
          width={100}
          height={100}
          src='/assets/Images/Logo.png'
          alt={'Logo Image'}
        />
        <h1 className='font-inter font-bold text-[28px] '>whitespace</h1>
      </div>
      <NavBar />
    </header>
  )
}
