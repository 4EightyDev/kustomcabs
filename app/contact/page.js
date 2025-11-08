'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-luxury-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="luxury-heading mb-6">Contact Us</h1>
          <p className="luxury-subheading max-w-3xl mx-auto">
            Ready to begin your luxury kitchen journey? Reach out to our design experts to schedule a consultation.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="luxury-heading text-3xl mb-6">Let's Discuss Your Vision</h2>
            <p className="luxury-subheading mb-8">
              Our design consultants are available to help you create the kitchen of your dreams. Schedule a consultation at our showroom or arrange for an in-home visit.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 text-luxury-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-1">Phone</h3>
                  <p className="text-luxury-gray">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-luxury-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-1">Email</h3>
                  <p className="text-luxury-gray">info@luxurycabinets.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-luxury-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-1">Showroom</h3>
                  <p className="text-luxury-gray">123 Design Avenue</p>
                  <p className="text-luxury-gray">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="luxury-card p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-luxury-dark font-light mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-luxury-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-dark"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-luxury-dark font-light mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-luxury-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-dark"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-luxury-dark font-light mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-luxury-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-dark"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-luxury-dark font-light mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-luxury-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-dark"
                ></textarea>
              </div>
              
              <button type="submit" className="luxury-btn w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
