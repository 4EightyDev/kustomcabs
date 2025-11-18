'use client'

import { motion } from 'motion/react'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-zinc-300 tracking-wide mt-4 sm:mt-6 text-sm sm:text-base px-2"
          >
            Transforming spaces with precision craftsmanship. We focus on kitchen and bathroom remodels that combine thoughtful design and premium materials.
          </motion.p>
        </div>
      </section>

      {/* Kitchen Remodels Section */}
      <section id="kitchen-remodels" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-6"
            >
              <h3 className="section-heading text-zinc-900 text-xl sm:text-2xl md:text-3xl">Kitchen Remodels</h3>
              <p className="tracking-wide text-zinc-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Create the kitchen of your dreams with our comprehensive remodeling services. From initial design consultation to final installation, we handle every detail to ensure your new kitchen is both beautiful and functional.
              </p>
              <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                {[
                  { title: 'Custom Cabinet Design', desc: 'Tailored cabinetry solutions that maximize storage and reflect your personal style' },
                  { title: 'Layout Optimization', desc: 'Intelligent workflow planning for efficient cooking and entertaining spaces' },
                  { title: 'Premium Materials', desc: 'High-end finishes and hardware from trusted manufacturers' },
                  { title: 'Integrated Solutions', desc: 'Seamless lighting, appliance, and storage integration' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-3 sm:gap-4"
                  >
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm sm:text-base">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-zinc-900 mb-1 text-sm sm:text-base">{feature.title}</h5>
                      <p className="text-xs sm:text-sm text-zinc-600 tracking-wide">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link href="/contact">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg sm:rounded-xl shadow-md hover:bg-primary/90 transition font-semibold text-sm sm:text-base">
                  Schedule Consultation
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-6"
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl aspect-4/5">
                <Image
                  className="absolute w-full h-full object-cover"
                  src="/images/services-kitchen_remodel.jpg"
                  alt="Kitchen remodel"
                  fill
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bathroom Remodels Section */}
      <section id="bathroom-remodels" className="py-12 sm:py-16 md:py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-6 order-2 md:order-1"
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl aspect-4/5">
                <Image
                  className="absolute w-full h-full object-cover"
                  src="/images/services-bathroom_remodel.jpg"
                  alt="Bathroom remodel"
                  fill
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-6 order-1 md:order-2"
            >
              <h3 className="section-heading text-zinc-900 text-xl sm:text-2xl md:text-3xl">Bathroom Remodels</h3>
              <p className="tracking-wide text-zinc-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Transform your bathroom into a spa-like retreat with our custom remodeling services. We combine luxury aesthetics with practical functionality to create spaces that enhance your daily routine.
              </p>
              <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                {[
                  { title: 'Custom Vanity Solutions', desc: 'Bespoke storage and vanity designs tailored to your space and needs' },
                  { title: 'Wet Area Planning', desc: 'Expert waterproofing and layout design for showers and baths' },
                  { title: 'Luxury Finishes', desc: 'Spa-inspired fixtures and premium materials for a refined aesthetic' },
                  { title: 'Accessible Design', desc: 'Modern and accessible design options for all lifestyles' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-3 sm:gap-4"
                  >
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm sm:text-base">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-zinc-900 mb-1 text-sm sm:text-base">{feature.title}</h5>
                      <p className="text-xs sm:text-sm text-zinc-600 tracking-wide">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link href="/contact">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg sm:rounded-xl shadow-md hover:bg-primary/90 transition font-semibold text-sm sm:text-base">
                  Schedule Consultation
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bg-kitchen-sketch.webp')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h3 className="section-heading text-zinc-900 text-xl sm:text-2xl md:text-3xl">Our Process</h3>
            <p className="tracking-wide text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
              From concept to completion, we guide you through every step of your remodeling journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your vision, assess your space, and understand your lifestyle needs.' },
              { step: '02', title: 'Design', desc: 'Our designers create detailed plans and 3D renderings for your approval.' },
              { step: '03', title: 'Fabrication', desc: 'Skilled craftsmen bring your design to life using premium materials.' },
              { step: '04', title: 'Installation', desc: 'Expert installation ensures perfect fit and flawless finish.' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-50 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-primary font-semibold text-lg sm:text-xl md:text-2xl">{item.step}</span>
                </div>
                <h4 className="font-semibold text-zinc-900 mb-2 sm:mb-3 text-sm sm:text-base">{item.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-600 tracking-wide">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="section-heading text-white mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl">
              Ready to Transform Your Space?
            </h3>
            <p className="text-zinc-400 tracking-wide mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Let's discuss your vision and bring your custom cabinetry dreams to life. Schedule a consultation with our design team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg sm:rounded-xl shadow-md hover:bg-primary/90 transition font-semibold text-sm sm:text-base"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:4804857744"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-zinc-800 text-white rounded-lg sm:rounded-xl shadow-md hover:bg-zinc-700 transition font-semibold border border-zinc-700 text-sm sm:text-base"
              >
                Call 480-485-7744
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}