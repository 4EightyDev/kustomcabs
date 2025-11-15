'use client'

import { motion } from 'motion/react'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function Gallery() {
  const galleryImages = [
    { src: '/images/slideshow-1.jpg', alt: 'Kitchen Design 1', category: 'Kitchen' },
    { src: '/images/slideshow-2.jpg', alt: 'Kitchen Design 2', category: 'Kitchen' },
    { src: '/images/slideshow-3.jpg', alt: 'Kitchen Design 3', category: 'Kitchen' },
    { src: '/images/slideshow-4.jpg', alt: 'Bathroom Design 1', category: 'Bathroom' },
    { src: '/images/slideshow-5.jpg', alt: 'Bathroom Design 2', category: 'Bathroom' },
    { src: '/images/services-kitchen_remodel.jpg', alt: 'Kitchen Remodel', category: 'Kitchen' },
    { src: '/images/services-bathroom_remodel.jpg', alt: 'Bathroom Remodel', category: 'Bathroom' },
    { src: '/images/herobg.jpg', alt: 'Custom Cabinetry', category: 'Custom' },
  ]

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
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-zinc-300 tracking-wide mt-6"
          >
            Explore our portfolio of custom cabinetry projects. Each space tells a story of craftsmanship, design excellence, and attention to detail.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                      {image.category}
                    </span>
                    <p className="text-white mt-2 font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-zinc-950/98">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="section-heading text-white mb-6">
              Ready to Create Your Dream Space?
            </h3>
            <p className="text-zinc-400 tracking-wide mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and bring your custom cabinetry dreams to life. Schedule a consultation with our design team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-primary text-white rounded-xl shadow-md hover:bg-primary/90 transition font-semibold"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:4804857744"
                className="px-8 py-4 bg-zinc-800 text-white rounded-xl shadow-md hover:bg-zinc-700 transition font-semibold border border-zinc-700"
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

