'use client'

import { motion } from 'motion/react'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function About() {
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
            About Kustomcabs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-zinc-300 tracking-wide mt-6"
          >
            Crafting exceptional kitchen experiences with timeless elegance and unparalleled quality for over 25 years.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
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
              <h3 className="section-heading text-zinc-900">Our Story</h3>
              <p className="tracking-wide text-zinc-600 mb-6">
                Founded with a passion for exceptional craftsmanship, Kustomcabs has been transforming kitchens and bathrooms across the region for over two decades. What started as a small custom shop has grown into a trusted name in luxury cabinetry.
              </p>
              <p className="tracking-wide text-zinc-600 mb-6">
                We believe that every home deserves cabinetry that reflects the homeowner's unique style while standing the test of time. Our commitment to quality, attention to detail, and personalized service sets us apart in an industry where shortcuts are all too common.
              </p>
              <p className="tracking-wide text-zinc-600">
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
      <section className="py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="section-heading text-zinc-900">Our Values</h3>
            <p className="tracking-wide text-zinc-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h4 className="small-heading text-zinc-900 mb-4">{value.title}</h4>
                <p className="text-zinc-600 tracking-wide">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-12 items-center">
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
              <h3 className="section-heading text-white">Why We're Different</h3>
              <p className="tracking-wide text-zinc-400 mb-8">
                In a world of mass production, we remain committed to the art of custom cabinetry. Here's what sets us apart:
              </p>
              <div className="space-y-6">
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
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">{item.title}</h5>
                      <p className="text-sm text-zinc-400 tracking-wide">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="section-heading text-zinc-900">Meet Our Team</h3>
            <p className="tracking-wide text-zinc-600 max-w-2xl mx-auto">
              A dedicated group of craftspeople, designers, and installers committed to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="bg-zinc-50 p-8 rounded-2xl"
              >
                <h4 className="small-heading text-zinc-900 mb-2">{team.name}</h4>
                <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-wider">{team.role}</p>
                <p className="text-zinc-600 tracking-wide text-sm">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

