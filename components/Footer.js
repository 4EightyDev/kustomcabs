'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-surface py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image src='/images/logo-kustomcabs-standard.png' alt='Kustomcabs Logo' width={150} height={75} className="w-32 sm:w-36 md:w-[150px] h-auto" />
            <p className="font-light text-zinc mb-4 sm:mb-6 text-sm sm:text-base">
              Crafting exceptional kitchen experiences with timeless elegance and unparalleled quality.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {['instagram', 'pinterest', 'houzz'].map((social) => (
                <Link 
                  key={social} 
                  href="#" 
                  className="text-zinc hover:text-primary transition-colors duration-300 text-xs sm:text-sm"
                >
                  {social.charAt(0).toUpperCase() + social.slice(1)}
                </Link>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="small-heading text-lg sm:text-xl md:text-2xl">Collections</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Classic White', 'Modern Gray', 'Coastal Blue', 'Estate Collection'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-light text-zinc hover:text-primary transition-colors duration-300 text-sm sm:text-base">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="small-heading text-lg sm:text-xl md:text-2xl">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Design Consultation', 'Custom Fabrication', 'Installation', 'Maintenance'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-light text-zinc hover:text-primary transition-colors duration-300 text-sm sm:text-base">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="small-heading text-lg sm:text-xl md:text-2xl">Contact</h4>
            <address className="font-light not-italic text-zinc space-y-2 sm:space-y-3 text-sm sm:text-base">
              <p>123 Design Avenue</p>
              <p>New York, NY 10001</p>
              <p className="pt-1 sm:pt-2">info@luxurycabinets.com</p>
              <p>(555) 123-4567</p>
            </address>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-zinc/20 mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-light text-zinc text-xs sm:text-sm">
            © {currentYear} Luxury Cabinets. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
