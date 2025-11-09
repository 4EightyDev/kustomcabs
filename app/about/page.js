'use client'

import { motion } from 'framer-motion'
import PlaceholderImage from '../../components/PlaceholderImage'

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="luxury-heading mb-6">About Us</h1>
          <p className="luxury-subheading max-w-3xl mx-auto">
            For over three decades, Luxury Cabinets has been redefining kitchen design with unparalleled craftsmanship and innovative solutions.
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
            <h2 className="luxury-heading text-3xl mb-6">Our Story</h2>
            <p className="luxury-subheading mb-6">
              Founded in 1990 by master craftsman James Richardson, Luxury Cabinets began as a small workshop in upstate New York. With a passion for fine woodworking and an eye for detail, James set out to create cabinetry that would stand the test of time.
            </p>
            <p className="luxury-subheading mb-6">
              Today, we operate from a state-of-the-art facility with a team of over 100 skilled artisans, designers, and engineers. Our commitment to excellence remains unchanged, with each project receiving the same meticulous attention to detail that James himself would provide.
            </p>
            <p className="luxury-subheading">
              We believe that exceptional cabinetry is more than just functional storage—it's a statement of personal style and a testament to refined taste.
            </p>
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

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="luxury-heading text-3xl mb-6">Our Philosophy</h2>
          <p className="luxury-subheading max-w-3xl mx-auto mb-10">
            We believe that luxury lies in the perfect balance of form and function, where timeless design meets exceptional craftsmanship.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Design Excellence', description: 'Every project begins with a vision and ends with a masterpiece' },
              { title: 'Sustainable Practices', description: 'We source responsibly and craft with care for future generations' },
              { title: 'Client Partnership', description: 'Your dream kitchen is our mission, from concept to completion' }
            ].map((item, index) => (
              <div key={index} className="luxury-card p-8">
                <h3 className="text-xl font-light mb-4 text-zinc-950">{item.title}</h3>
                <p className="text-zinc">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
