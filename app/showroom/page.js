'use client'

import { motion } from 'motion/react'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function Showroom() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-surface min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/herobg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="page-heading text-white text-3xl sm:text-4xl md:text-5xl"
          >
            Visit Our Showroom
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-zinc-300 tracking-wide mt-4 sm:mt-6 text-sm sm:text-base px-2"
          >
            Experience our premium cabinetry collections in person at our Chandler showroom. See, touch, and feel the quality that sets us apart.
          </motion.p>
        </div>
      </section>

      {/* Showroom Info */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-6"
            >
              <h3 className="section-heading text-zinc-900 text-xl sm:text-2xl md:text-3xl">Chandler Showroom</h3>
              <p className="tracking-wide text-zinc-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Our showroom is more than just a display space—it's an immersive experience where you can explore our complete range of cabinetry options, finishes, and hardware selections.
              </p>
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-lg sm:text-xl">📍</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-zinc-900 mb-1 text-sm sm:text-base">Location</h5>
                    <p className="text-zinc-600 tracking-wide text-sm sm:text-base">
                      Visit us in Chandler, Arizona<br />
                      <span className="text-xs sm:text-sm text-zinc-500">Conveniently located with ample parking</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-lg sm:text-xl">🕐</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-zinc-900 mb-1 text-sm sm:text-base">Hours</h5>
                    <p className="text-zinc-600 tracking-wide text-sm sm:text-base">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 3:00 PM<br />
                      <span className="text-xs sm:text-sm text-zinc-500">Sunday: By appointment</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-lg sm:text-xl">📞</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-zinc-900 mb-1 text-sm sm:text-base">Contact</h5>
                    <p className="text-zinc-600 tracking-wide text-sm sm:text-base">
                      <a href="tel:4804857744" className="text-primary hover:underline font-semibold">
                        480-485-7744
                      </a>
                      <br />
                      <span className="text-xs sm:text-sm text-zinc-500">Call to schedule a private consultation</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="tel:4804857744"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg sm:rounded-xl shadow-md hover:bg-primary/90 transition font-semibold text-center text-sm sm:text-base"
                >
                  Call Us Now
                </a>
                <a
                  href="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-zinc-800 text-white rounded-lg sm:rounded-xl shadow-md hover:bg-zinc-700 transition font-semibold text-center border border-zinc-700 text-sm sm:text-base"
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
      <section className="py-12 sm:py-16 md:py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h3 className="section-heading text-zinc-900 text-xl sm:text-2xl md:text-3xl">What to Expect</h3>
            <p className="tracking-wide text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Your visit to our showroom is the first step in creating your dream space.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: 'Explore Collections',
                description: 'Browse our complete range of cabinetry styles, from classic to contemporary.',
                icon: ''
              },
              {
                title: 'Touch & Feel Quality',
                description: 'Experience the premium materials and finishes up close.',
                icon: ''
              },
              {
                title: 'Design Consultation',
                description: 'Meet with our design experts to discuss your vision and needs.',
                icon: ''
              },
              {
                title: 'Get Inspired',
                description: 'See real examples of our work and gather ideas for your project.',
                icon: ''
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg text-center"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h4 className="font-semibold text-zinc-900 mb-2 sm:mb-3 text-sm sm:text-base">{item.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-600 tracking-wide">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h3 className="section-heading text-zinc-900 text-xl sm:text-2xl md:text-3xl">Featured in Our Showroom</h3>
            <p className="tracking-wide text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Discover the premium brands we proudly represent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
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
                className="bg-zinc-50 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48 sm:h-56 md:h-64">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6 md:p-8">
                  <h4 className="small-heading text-zinc-900 mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl">{brand.name}</h4>
                  <p className="text-zinc-600 tracking-wide text-sm sm:text-base">{brand.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map/Directions Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h3 className="section-heading text-white text-xl sm:text-2xl md:text-3xl">Find Us</h3>
            <p className="tracking-wide text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Located in Chandler, Arizona. Easy to find, easy to visit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-900/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-zinc-800/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h4 className="small-heading text-white mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl">Get Directions</h4>
                <p className="text-zinc-400 tracking-wide mb-4 sm:mb-6 text-sm sm:text-base">
                  Use the map below or your preferred navigation app to find us. We're conveniently located with plenty of parking available.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-primary font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Address</p>
                    <p className="text-zinc-300 text-sm sm:text-base">Chandler, Arizona</p>
                    <p className="text-xs sm:text-sm text-zinc-500 mt-1">Call for exact address and directions</p>
                  </div>
                  <div>
                    <p className="text-primary font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Parking</p>
                    <p className="text-zinc-300 text-sm sm:text-base">Free parking available on-site</p>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800/50 rounded-lg sm:rounded-xl flex items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                <p className="text-zinc-500 text-center text-sm sm:text-base px-2">
                  Map integration available<br />
                  <span className="text-xs sm:text-sm">Contact us for directions</span>
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

