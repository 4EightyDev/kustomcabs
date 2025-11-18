'use client'

import { motion } from 'motion/react'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function About() {
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
            About Kustomcabs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-zinc-300 tracking-wide mt-4 sm:mt-6 text-sm sm:text-base px-2"
          >
            Crafting exceptional kitchen experiences with timeless elegance and unparalleled quality for over 25 years.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
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
              <h3 className="section-heading text-zinc-900 text-xl sm:text-2xl md:text-3xl">Our Story</h3>
              <p className="tracking-wide text-zinc-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Founded with a passion for exceptional craftsmanship, Kustomcabs has been transforming kitchens and bathrooms across the region for over two decades. What started as a small custom shop has grown into a trusted name in luxury cabinetry.
              </p>
              <p className="tracking-wide text-zinc-600 mb-4 sm:mb-6 text-sm sm:text-base">
                We believe that every home deserves cabinetry that reflects the homeowner's unique style while standing the test of time. Our commitment to quality, attention to detail, and personalized service sets us apart in an industry where shortcuts are all too common.
              </p>
              <p className="tracking-wide text-zinc-600 text-sm sm:text-base">
                Today, we're proud to partner with premium manufacturers like <span className="text-primary font-semibold">Bellmont Cabinets</span> and <span className="text-primary font-semibold">Procraft Cabinetry</span>, bringing you the finest cabinetry available while maintaining our signature custom touch.
              </p>
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
                  alt="Our craftsmanship"
                  fill
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 md:py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h3 className="section-heading text-zinc-900 text-xl sm:text-2xl md:text-3xl">Our Values</h3>
            <p className="tracking-wide text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: 'Craftsmanship',
                description: 'Every detail matters. We take pride in our work and never compromise on quality, ensuring your cabinetry is built to last for generations.',
                icon: '🔨'
              },
              {
                title: 'Integrity',
                description: 'Honest communication, transparent pricing, and reliable service. We build lasting relationships with our clients based on trust.',
                icon: '🤝'
              },
              {
                title: 'Innovation',
                description: 'We stay current with the latest design trends and manufacturing techniques while honoring timeless craftsmanship traditions.',
                icon: '💡'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-5 md:mb-6">{value.icon}</div>
                <h4 className="small-heading text-zinc-900 mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl">{value.title}</h4>
                <p className="text-zinc-600 tracking-wide text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-6 order-2 md:order-1"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-4/5">
                <Image
                  className="absolute w-full h-full object-cover"
                  src="/images/services-bathroom_remodel.jpg"
                  alt="Our work"
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
              <h3 className="section-heading text-white text-xl sm:text-2xl md:text-3xl">Why We're Different</h3>
              <p className="tracking-wide text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base">
                In a world of mass production, we remain committed to the art of custom cabinetry. Here's what sets us apart:
              </p>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: 'Personalized Service',
                    desc: 'Every project is unique. We work closely with you to understand your vision and bring it to life.'
                  },
                  {
                    title: 'Premium Partnerships',
                    desc: 'Exclusive access to Bellmont Cabinets and Procraft Cabinetry means you get the best materials available.'
                  },
                  {
                    title: 'Expert Installation',
                    desc: 'Our experienced installers ensure perfect fit and finish, treating your home with the respect it deserves.'
                  },
                  {
                    title: 'Lifetime Support',
                    desc: 'We stand behind our work. Our relationship with you doesn\'t end when installation is complete.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-3 sm:gap-4"
                  >
                    <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-white mb-1 text-sm sm:text-base">{item.title}</h5>
                      <p className="text-xs sm:text-sm text-zinc-400 tracking-wide">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h3 className="section-heading text-zinc-900 text-xl sm:text-2xl md:text-3xl">Meet Our Team</h3>
            <p className="tracking-wide text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
              A dedicated group of craftspeople, designers, and installers committed to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                name: 'Design Team',
                role: 'Creative Vision',
                description: 'Our designers bring years of experience and a keen eye for detail to every project, ensuring your space is both beautiful and functional.'
              },
              {
                name: 'Master Craftsmen',
                role: 'Expert Fabrication',
                description: 'Skilled artisans who take pride in their work, ensuring every cabinet meets our exacting standards for quality and durability.'
              },
              {
                name: 'Installation Specialists',
                role: 'Precision Installation',
                description: 'Experienced professionals who handle every installation with care, ensuring perfect fit and flawless finish in your home.'
              }
            ].map((team, index) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-50 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl"
              >
                <h4 className="small-heading text-zinc-900 mb-2 text-lg sm:text-xl md:text-2xl">{team.name}</h4>
                <p className="text-primary font-semibold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">{team.role}</p>
                <p className="text-zinc-600 tracking-wide text-xs sm:text-sm">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

