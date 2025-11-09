'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image src='/images/logo-kustomcabs-standard.png' alt='Kustomcabs Logo' width={150} height={75} />
            <p className="font-light text-zinc mb-6">
              Crafting exceptional kitchen experiences with timeless elegance and unparalleled quality.
            </p>
            <div className="flex space-x-4">
              {['instagram', 'pinterest', 'houzz'].map((social) => (
                <Link 
                  key={social} 
                  href="#" 
                  className="text-zinc hover:text-primary transition-colors duration-300"
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
            <h4 className="small-heading">Collections</h4>
            <ul className="space-y-3">
              {['Classic White', 'Modern Gray', 'Coastal Blue', 'Estate Collection'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-light text-zinc hover:text-primary transition-colors duration-300">
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
            <h4 className="small-heading">Services</h4>
            <ul className="space-y-3">
              {['Design Consultation', 'Custom Fabrication', 'Installation', 'Maintenance'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-light text-zinc hover:text-primary transition-colors duration-300">
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
            <h4 className="small-heading">Contact</h4>
            <address className="font-light not-italic text-zinc space-y-3">
              <p>123 Design Avenue</p>
              <p>New York, NY 10001</p>
              <p className="pt-2">info@luxurycabinets.com</p>
              <p>(555) 123-4567</p>
            </address>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-zinc/20 mt-16 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-light text-zinc">
            © {currentYear} Luxury Cabinets. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
