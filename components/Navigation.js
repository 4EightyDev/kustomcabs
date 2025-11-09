'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    // { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="hidden md:block text-zinc-600 grow">
      <ul className="flex w-max justify-start whitespace-nowrap mr-auto">
        {navItems.map((item) => (
          <li className='after:inline-block after:text-primary after:mx-4 after:content-["/"]' key={item.name}>
            <Link 
              href={item.href} 
              className={`uppercase text-xs tracking-widest transition-all duration-300  ${pathname === item.href ? 'text-primary' : 'text-zinc-200 hover:text-white'}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
