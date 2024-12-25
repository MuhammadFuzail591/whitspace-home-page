import { Button } from './Button'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Hero () {
  return (
    <div className='h-[810px] w-[95%] lg:w-[80%] flex flex-col md:flex-row items-center justify-center gap-10'>
      <div className='flex flex-col gap-[10px] md:gap-[30px] lg:gap-[45px] xl:gap[60px]'>
        <h2 className='font-inter font-bold leading-[75px] text-[64px]'>
          Get More Done with whitespace
        </h2>
        <p className='font-inter text-[18px]'>
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
        <Button
          text='Try Whitespace Free'
          classes='text-[18px] xl:text-[18px] p-[20px] bg-[#4F9CF9] text-[#FFFFFF] w-[250px]'
          icon={<FaArrowRightLong />}
        />
      </div>
      <div className='w-[98%] h-[549px] md:w-[824px] bg-[#C4DEFD]'></div>
    </div>
  )
}
