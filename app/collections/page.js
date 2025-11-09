'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PlaceholderImage from '../../components/PlaceholderImage'

const collections = [
  {
    id: 1,
    name: 'Classic White',
    description: 'Timeless elegance with pristine white finishes and subtle detailing',
    image: 'white-cabinetry'
  },
  {
    id: 2,
    name: 'Modern Gray',
    description: 'Sleek sophistication with contemporary gray tones and clean lines',
    image: 'gray-cabinetry'
  },
  {
    id: 3,
    name: 'Coastal Blue',
    description: 'Serene ocean-inspired blues with natural wood accents',
    image: 'blue-cabinetry'
  },
  {
    id: 4,
    name: 'Estate Collection',
    description: 'Luxurious custom designs with premium materials and unique finishes',
    image: 'estate-cabinetry'
  },
  {
    id: 5,
    name: 'Minimalist',
    description: 'Ultra-modern designs with handle-less cabinets and monochromatic palettes',
    image: 'minimalist-cabinetry'
  },
  {
    id: 6,
    name: 'Heritage Oak',
    description: 'Traditional craftsmanship with rich oak wood and classic styling',
    image: 'oak-cabinetry'
  }
]

export default function Collections() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="luxury-heading mb-6">Our Collections</h1>
          <p className="luxury-subheading max-w-2xl mx-auto">
            Explore our carefully curated selection of luxury cabinetry designed to elevate your kitchen experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className="luxury-card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-80 relative overflow-hidden">
                <PlaceholderImage className="w-full h-full" delay={index * 0.1} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-light mb-2">{collection.name}</h3>
                <p className="text-zinc mb-4">{collection.description}</p>
                <Link 
                  href="#" 
                  className="text-zinc-950 font-medium hover:underline inline-flex items-center"
                >
                  View Collection
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
