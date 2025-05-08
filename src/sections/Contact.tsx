"use client"
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from "../assets/images/grain.jpg"
import { useRouter } from 'next/navigation';

export const ContactSection = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("https://wa.link/ms3p3k")
  }
  return (
    <div id="contact" className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400
         text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>


          <div className="absolute inset-0 -z-10 opacity-5" style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>Let's have a chat!</h2>
              <p className='text-sm mt-2 md:text-base'>I’ve built things that live on the internet, fixed bugs at 3 AM, and argued with semicolons more than people. Whether it’s building full-stack apps or brainstorming your next big idea — I’m all ears. Let’s create something cool together!
              </p>
            </div>
            <div>
              <button className='text-white bg-gray-900 inline-flex items-center 
              px-6 h-12 rounded-xl gap-2 md:w-max border border-gray-900' onClick={handleClick}>
                <span className='font-semibold'>Contact me!</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
