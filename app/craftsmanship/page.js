'use client'

import { motion } from 'framer-motion'
import PlaceholderImage from '../../components/PlaceholderImage'

const craftsmanshipFeatures = [
  {
    title: 'Hand-Selected Materials',
    description: 'We source only the finest woods, metals, and finishes from sustainable suppliers worldwide.'
  },
  {
    title: 'Precision Engineering',
    description: 'Each piece is crafted with millimeter precision using state-of-the-art machinery and traditional techniques.'
  },
  {
    title: 'Custom Finishes',
    description: 'Our artisans apply custom finishes that enhance the natural beauty of materials while ensuring durability.'
  },
  {
    title: 'Quality Assurance',
    description: 'Every cabinet undergoes rigorous quality checks to meet our exacting standards.'
  }
]

export default function Craftsmanship() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="luxury-heading mb-6">Uncompromising Craftsmanship</h1>
          <p className="luxury-subheading max-w-3xl mx-auto">
            Our master craftsmen combine traditional techniques with modern innovation to create cabinetry that stands the test of time.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="luxury-heading text-3xl mb-6">The Art of Luxury Cabinetry</h2>
            <p className="luxury-subheading mb-6">
              For over three decades, we have perfected the art of luxury cabinetry. Our commitment to excellence is evident in every detail, from the initial design consultation to the final installation.
            </p>
            <p className="luxury-subheading mb-6">
              Each piece is meticulously crafted by skilled artisans who understand that true luxury lies in the details. We believe that exceptional cabinetry should not only be beautiful but also functional, durable, and timeless.
            </p>
            <button className="luxury-btn mt-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {craftsmanshipFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="luxury-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-light mb-4 text-zinc-950">{feature.title}</h3>
              <p className="text-zinc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
