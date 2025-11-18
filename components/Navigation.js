'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    // { name: 'Contact', href: '/contact' }
  ]

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleLinkClick = (href) => {
    // Trigger exit animation before navigation
    setMobileMenuOpen(false)
    // Small delay to allow exit animation to play
    setTimeout(() => {
      router.push(href)
    }, 300)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      y: -20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      x: -50,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const menuVariants = {
    hidden: {
      clipPath: 'polygon(0 0, 0% 0%, 0% 0%)',
      opacity: 0,
      transition: {
        clipPath: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        },
        opacity: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }
      }
    },
    visible: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: 1,
      transition: {
        opacity: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
          delay: 0
        },
        clipPath: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3
        },
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    },
    exit: {
      clipPath: 'polygon(0 0, 0% 0%, 0% 0%)',
      opacity: 0,
      transition: {
        clipPath: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.5
        },
        opacity: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.5
        },
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block text-zinc-600 grow">
        <ul className="flex w-max justify-start whitespace-nowrap mr-auto">
          {navItems.map((item) => (
            <li className='after:inline-block after:text-primary after:mx-2 sm:after:mx-3 md:after:mx-4 after:content-["/"] last:after:hidden' key={item.name}>
              <Link 
                href={item.href} 
                className={`uppercase text-[10px] sm:text-[10px] md:text-[9px] lg:text-xs tracking-widest transition-all duration-300  ${pathname === item.href ? 'text-primary' : 'text-zinc-200 hover:text-white'}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </>
  )
}
