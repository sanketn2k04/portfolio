import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from "../assets/images/grain.jpg"

export const ContactSection = () => {
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
              <h2 className='font-serif text-2xl md:text-3xl'>Let's create Something Outstanding!</h2>
              <p className='text-sm mt-2 md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repudiandae natus iusto cum beatae suscipit molestias et laborum, 
                tempora doloribus. Odit, eos temporibus tempore numquam praesentium 
                ab in delectus laudantium assumenda?
              </p>
            </div> 
            <div>  
              <button className='text-white bg-gray-900 inline-flex items-center 
              px-6 h-12 rounded-xl gap-2 md:w-max border border-gray-900'>
                <span className='font-semibold'>Contact me!</span>
                <ArrowUpRightIcon className="size-4"/>
              </button>
            </div>
          </div>  
        </div>  
      </div>
    </div>
  );
};
