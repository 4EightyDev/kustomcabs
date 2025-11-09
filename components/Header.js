'use client'

import { useState, useEffect } from 'react' 
import Link from 'next/link' 
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from './Navigation'
import Image from 'next/image'
import classnames from 'tailwindcss-classnames'

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
    <header className={`fixed w-full z-50 transition-all duration-300 bg-zinc-800/50 backdrop-blur-sm ${isScrolled ? 'h-15' : 'h-25'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        <Navigation />

          <Link href="/" className='mx-auto max-w-max w-full absolute top-[15px] inset-x-0 flex flex-col items-center gap-4 justify-center h-[70px]'>
            {/* <div className="flex items-center gap-4 w-[260px] justify-center  h-[70px] relative"> */}
              {/* Logomark */}
                <Image className={classnames("shrink-0 duration-150", isScrolled ? 'opacity-0 -translate-y-4' : 'translate-y-2 opacity-100 delay-100')} src='/images/logomark-kustomcabs-standard.jpg' alt='Kustomcabs Logomark' width={40} height={40} />
              {/* Fulltype */}              
                <Image className={classnames("shrink-0 w-36 duration-300", isScrolled ? 'saturate-0 brightness-150 -translate-y-12' : 'translate-y-0')} src='/images/logo-kustomcabs-standard.png' alt='Kustomcabs Logo' width={200} height={56} />                              
                {/* <Image className={classnames("shrink-0 absolute w-20 duration-150", isScrolled ? 'top-6' : '')} src='/images/logomark-kustomcabs-standard.jpg' alt='Kustomcabs Logo' width={50} height={50} />                               */}
            {/* </div> */}
          </Link>
        
        <motion.div
          className='grow md:flex justify-end gap-12 hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link className='text-white leading-3.5' href='/showroom' title='Visit our Chandler Showroom'>
            <span className='block text-sm text-primary'>Visit our</span>
            Chandler Showroom
          </Link>
          <Link className='text-white leading-3.5' href='tel:4804857744' title='Call us 480-485-7744'>
            <span className='block text-sm text-primary tracking-widest'>Call Us</span>
            480 . 485 . 7744
          </Link>
        </motion.div>
      </div>
    </header>
  )
}
