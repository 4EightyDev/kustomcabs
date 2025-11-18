'use client'

import { useState, useEffect } from 'react' 
import Link from 'next/link' 
import { AnimatePresence, motion } from 'motion/react'
import Navigation from './Navigation'
import Image from 'next/image'
import classnames from 'tailwindcss-classnames'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`w-full top-0 z-50 transition-all duration-300 fixed bg-surface-light/50 backdrop-blur-2xl ${isScrolled ? 'h-14 sm:h-15' : 'h-20 sm:h-24 md:h-25'}`}>
      <div className="max-w-6xl mx-auto px-3 sm:px-4 flex items-center justify-between h-full">
        <MobileMenu />
        <Navigation />
          <Link href="/" className='mx-auto max-w-max w-full absolute top-[10px] sm:top-[12px] md:top-[15px] inset-x-0 flex flex-col items-center gap-2 sm:gap-3 md:gap-4 justify-center h-[60px] sm:h-[65px] md:h-[70px]'>
            {/* Logomark */}
            <Image className={classnames("shrink-0 duration-150 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10", isScrolled ? 'opacity-0 -translate-y-4' : 'translate-y-1 sm:translate-y-2 opacity-100 delay-100')} src='/images/logomark-kustomcabs-standard.jpg' alt='Kustomcabs Logomark' width={40} height={40} />
            {/* Fulltype */}              
            <Image className={classnames("shrink-0 h-5 sm:h-5.5 md:h-6 w-auto duration-300", isScrolled ? 'saturate-0 brightness-150 -translate-y-10 sm:-translate-y-11 md:-translate-y-12' : 'translate-y-0')} src='/images/logo-kustomcabs-standard.png' alt='Kustomcabs Logo' width={200} height={56} />                              
          </Link>        
          <motion.div
            className='lg:flex justify-end gap-8 xl:gap-12 hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}  
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link className='text-white leading-3.5 text-xs lg:text-sm' href='/showroom' title='Visit our Chandler Showroom'>
              <span className='block text-xs lg:text-sm text-primary'>Visit our</span>
              <span className='text-xs lg:text-sm'>Chandler Showroom</span>
            </Link>
            <Link className='text-white leading-3.5 text-xs lg:text-sm' href='tel:4804857744' title='Call us 480-485-7744'>
              <span className='block text-xs lg:text-sm text-primary tracking-widest'>Call Us</span>
              <span className='text-xs lg:text-sm'>480 . 485 . 7744</span>
            </Link>
          </motion.div>

          <motion.div
            className='lg:hidden flex justify-end gap-4 items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}  
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href='/showroom' title='Visit our Chandler Showroom' className='text-primary hover:text-white transition-colors duration-300'>
              <svg className='w-5 h-5 sm:w-6 sm:h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2C7.13 2 3 6.13 3 11c0 5.25 9 11 9 11s9-5.75 9-11c0-4.87-4.13-9-9-9zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/>
              </svg>
            </Link>
            <Link href='tel:4804857744' title='Call us 480-485-7744' className='text-primary hover:text-white transition-colors duration-300'>
              <svg className='w-5 h-5 sm:w-6 sm:h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/>
              </svg>
            </Link>
          </motion.div>
      </div>
    </header>
  )
}
