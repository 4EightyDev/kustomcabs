'use client'

import { motion } from 'motion/react'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function Showroom() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-zinc-950 min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/herobg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-6 pt-32 pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="page-heading text-white"
          >
            Visit Our Showroom
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-zinc-300 tracking-wide mt-6"
          >
            Experience our premium cabinetry collections in person at our Chandler showroom. See, touch, and feel the quality that sets us apart.
          </motion.p>
        </div>
      </section>

      {/* Showroom Info */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-6"
            >
              <h3 className="section-heading text-zinc-900">Chandler Showroom</h3>
              <p className="tracking-wide text-zinc-600 mb-8">
                Our showroom is more than just a display space—it's an immersive experience where you can explore our complete range of cabinetry options, finishes, and hardware selections.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl">📍</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-zinc-900 mb-1">Location</h5>
                    <p className="text-zinc-600 tracking-wide">
                      Visit us in Chandler, Arizona<br />
                      <span className="text-sm text-zinc-500">Conveniently located with ample parking</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl">🕐</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-zinc-900 mb-1">Hours</h5>
                    <p className="text-zinc-600 tracking-wide">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 3:00 PM<br />
                      <span className="text-sm text-zinc-500">Sunday: By appointment</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl">📞</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-zinc-900 mb-1">Contact</h5>
                    <p className="text-zinc-600 tracking-wide">
                      <a href="tel:4804857744" className="text-primary hover:underline font-semibold">
                        480-485-7744
                      </a>
                      <br />
                      <span className="text-sm text-zinc-500">Call to schedule a private consultation</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:4804857744"
                  className="px-8 py-4 bg-primary text-white rounded-xl shadow-md hover:bg-primary/90 transition font-semibold text-center"
                >
                  Call Us Now
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-zinc-800 text-white rounded-xl shadow-md hover:bg-zinc-700 transition font-semibold text-center border border-zinc-700"
                >
                  Schedule Visit
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-6"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-4/5">
                <Image
                  className="absolute w-full h-full object-cover"
                  src="/images/services-kitchen_remodel.jpg"
                  alt="Our showroom"
                  fill
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="section-heading text-zinc-900">What to Expect</h3>
            <p className="tracking-wide text-zinc-600 max-w-2xl mx-auto">
              Your visit to our showroom is the first step in creating your dream space.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Explore Collections',
                description: 'Browse our complete range of cabinetry styles, from classic to contemporary.',
                icon: '🏛️'
              },
              {
                title: 'Touch & Feel Quality',
                description: 'Experience the premium materials and finishes up close.',
                icon: '✋'
              },
              {
                title: 'Design Consultation',
                description: 'Meet with our design experts to discuss your vision and needs.',
                icon: '💬'
              },
              {
                title: 'Get Inspired',
                description: 'See real examples of our work and gather ideas for your project.',
                icon: '✨'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-zinc-900 mb-3">{item.title}</h4>
                <p className="text-sm text-zinc-600 tracking-wide">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="section-heading text-zinc-900">Featured in Our Showroom</h3>
            <p className="tracking-wide text-zinc-600 max-w-2xl mx-auto">
              Discover the premium brands we proudly represent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: 'Bellmont Cabinets',
                description: 'Premium cabinetry known for exceptional quality and timeless design. Explore their extensive collection of styles and finishes.',
                image: '/images/services-kitchen_remodel.jpg'
              },
              {
                name: 'Procraft Cabinetry',
                description: 'Innovative designs and superior craftsmanship. Experience the perfect blend of style and functionality.',
                image: '/images/services-bathroom_remodel.jpg'
              }
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-50 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h4 className="small-heading text-zinc-900 mb-4">{brand.name}</h4>
                  <p className="text-zinc-600 tracking-wide">{brand.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map/Directions Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="section-heading text-white">Find Us</h3>
            <p className="tracking-wide text-zinc-400 max-w-2xl mx-auto">
              Located in Chandler, Arizona. Easy to find, easy to visit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="small-heading text-white mb-6">Get Directions</h4>
                <p className="text-zinc-400 tracking-wide mb-6">
                  Use the map below or your preferred navigation app to find us. We're conveniently located with plenty of parking available.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-primary font-semibold mb-2">Address</p>
                    <p className="text-zinc-300">Chandler, Arizona</p>
                    <p className="text-sm text-zinc-500 mt-1">Call for exact address and directions</p>
                  </div>
                  <div>
                    <p className="text-primary font-semibold mb-2">Parking</p>
                    <p className="text-zinc-300">Free parking available on-site</p>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800/50 rounded-xl flex items-center justify-center min-h-[300px]">
                <p className="text-zinc-500 text-center">
                  Map integration available<br />
                  <span className="text-sm">Contact us for directions</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

