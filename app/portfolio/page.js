'use client'

import { motion } from 'framer-motion'
import PlaceholderImage from '../../components/PlaceholderImage'

const portfolioItems = [
  { id: 1, title: 'Manhattan Penthouse', location: 'New York, NY' },
  { id: 2, title: 'Hillside Estate', location: 'Los Angeles, CA' },
  { id: 3, title: 'Lakefront Retreat', location: 'Seattle, WA' },
  { id: 4, title: 'Historic Brownstone', location: 'Boston, MA' },
  { id: 5, title: 'Modern Loft', location: 'Chicago, IL' },
  { id: 6, title: 'Coastal Villa', location: 'Miami, FL' }
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="luxury-heading mb-6">Portfolio</h1>
          <p className="luxury-subheading max-w-3xl mx-auto">
            Explore our collection of completed luxury kitchen projects, each showcasing our commitment to exceptional design and craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
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
                <h3 className="text-2xl font-light mb-1">{item.title}</h3>
                <p className="text-zinc mb-4">{item.location}</p>
                <button className="text-zinc-950 font-medium hover:underline">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
