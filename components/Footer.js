'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-luxury-dark text-luxury-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-light tracking-wider mb-6">
              LUXURY<span className="font-normal">CABINETS</span>
            </h3>
            <p className="font-light text-luxury-gray mb-6">
              Crafting exceptional kitchen experiences with timeless elegance and unparalleled quality.
            </p>
            <div className="flex space-x-4">
              {['instagram', 'pinterest', 'houzz'].map((social) => (
                <Link 
                  key={social} 
                  href="#" 
                  className="text-luxury-gray hover:text-luxury-white transition-colors duration-300"
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
            <h4 className="text-lg font-light mb-6">Collections</h4>
            <ul className="space-y-3">
              {['Classic White', 'Modern Gray', 'Coastal Blue', 'Estate Collection'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-light text-luxury-gray hover:text-luxury-white transition-colors duration-300">
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
            <h4 className="text-lg font-light mb-6">Services</h4>
            <ul className="space-y-3">
              {['Design Consultation', 'Custom Fabrication', 'Installation', 'Maintenance'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-light text-luxury-gray hover:text-luxury-white transition-colors duration-300">
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
            <h4 className="text-lg font-light mb-6">Contact</h4>
            <address className="font-light not-italic text-luxury-gray space-y-3">
              <p>123 Design Avenue</p>
              <p>New York, NY 10001</p>
              <p className="pt-2">info@luxurycabinets.com</p>
              <p>(555) 123-4567</p>
            </address>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-luxury-gray/20 mt-16 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-light text-luxury-gray">
            © {currentYear} Luxury Cabinets. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
