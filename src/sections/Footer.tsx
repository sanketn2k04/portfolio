import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    title: 'Linkdin',
    href: '/',
  },
  {
    title: 'Twitter',
    href: '/',
  },
  {
    title: 'Github',
    href: '/',
  },
  {
    title: 'Instagram',
    href: '/',
  },

]
export const Footer = () => {
  return (
    <footer className='relative overflow-hidden -z-10'>
      <div className='absolute h-[400px] w-[100vw] max-w-[1400px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 
        [mask-image:radial-gradient(circle_at_center_bottom,black,transparent_70%)]
        [-webkit-mask-image:radial-gradient(circle_at_center_bottom,black,transparent_70%)] 
        -z-10'></div>
      <div className='container relative z-10'>
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40'>&copy; 2025. All rights reserved!</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {
              footerLinks.map(link => (
                <a key={link.title} href={link.href} className='inline-flex items-center gap-1.5'>
                  <span className='font-semibold'>{link.title}</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              ))
            }
          </nav>
        </div>
      </div>
    </footer>
  )
};
