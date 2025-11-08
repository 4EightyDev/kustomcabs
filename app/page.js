'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '../components/Footer'
import PlaceholderImage from '../components/PlaceholderImage'
import Image from 'next/image'

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },   
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-luxury-white">
      {/* Hero Section */}
      <section id='heroSection' className="relative h-screen flex items-center justify-center overflow-hidden relative bg-neutral-950">
        <Image className='absolute w-full inset-0 grayscale-100 object-cover object-center mix-blend-multiply' style={{opacity: '3%'}} src='/images/herobg.jpg' height={100} width={150} alt='Hero BG' />
                <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            className="luxury-heading mb-2 font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elevate Your Space
          </motion.h1>
          <motion.p 
            className="luxury-subheading mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Designer Cabinets by Kustomcabs, LLC.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#collections" className="luxury-btn inline-block">
              Explore Collections
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="luxury-heading mb-4"
              variants={fadeInUp}
            >
              Our Collections
            </motion.h2>
            <motion.p 
              className="luxury-subheading max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Each piece is meticulously crafted to perfection
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="luxury-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-80 relative overflow-hidden">
                  <PlaceholderImage className="w-full h-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-light mb-2">Collection {item}</h3>
                  <p className="text-luxury-gray mb-4">Premium materials and expert craftsmanship</p>
                  <button className="text-luxury-dark font-medium hover:underline">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 px-4 bg-luxury-gray/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="luxury-heading mb-6">Uncompromising Craftsmanship</h2>
              <p className="luxury-subheading mb-6">
                Our master craftsmen combine traditional techniques with modern innovation to create cabinetry that stands the test of time.
              </p>
              <ul className="space-y-4 mb-8">
                {['Hand-selected premium materials', 'Precision-engineered construction', 'Custom finishes tailored to your vision'].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-luxury-dark mr-2">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <button className="luxury-btn">
                Our Process
              </button>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 h-96"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <PlaceholderImage className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="luxury-heading mb-6">Begin Your Luxury Journey</h2>
            <p className="luxury-subheading mb-10 max-w-2xl mx-auto">
              Schedule a consultation with our design experts to bring your dream kitchen to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="luxury-btn">
                Book Consultation
              </button>
              <button className="px-6 py-3 border border-luxury-dark text-luxury-dark rounded-full font-medium transition-all duration-300 ease-in-out hover:bg-luxury-dark hover:text-luxury-white">
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
