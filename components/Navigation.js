'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'Craftsmanship', href: '/craftsmanship' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-10">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href} 
              className={`font-light transition-opacity ${pathname === item.href ? 'text-luxury-dark' : 'text-luxury-dark hover:opacity-70'}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
