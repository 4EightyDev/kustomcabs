'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const galleryImages = [
    { id: '1', src: '/images/slideshow-1.jpg', alt: 'Kitchen Design 1', category: 'Kitchen' },
    { id: '2', src: '/images/slideshow-2.jpg', alt: 'Kitchen Design 2', category: 'Kitchen' },
    { id: '3', src: '/images/slideshow-3.jpg', alt: 'Kitchen Design 3', category: 'Kitchen' },
    { id: '4', src: '/images/slideshow-4.jpg', alt: 'Bathroom Design 1', category: 'Bathroom' },
    { id: '5', src: '/images/slideshow-5.jpg', alt: 'Bathroom Design 2', category: 'Bathroom' },
    { id: '6', src: '/images/services-kitchen_remodel.jpg', alt: 'Kitchen Remodel', category: 'Kitchen' },
    { id: '7', src: '/images/services-bathroom_remodel.jpg', alt: 'Bathroom Remodel', category: 'Bathroom' },
    { id: '8', src: '/images/herobg.jpg', alt: 'Custom Cabinetry', category: 'Custom' },
  ]

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
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-zinc-300 tracking-wide mt-4 sm:mt-6 text-sm sm:text-base px-2"
          >
            Explore our portfolio of custom cabinetry projects. Each space tells a story of craftsmanship, design excellence, and attention to detail.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                layoutId={isMobile ? undefined : image.id}
                onClick={() => setSelectedId(image.id)}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  className={`object-cover ${!isMobile ? 'group-hover:scale-110 transition-transform duration-500' : ''}`}
                />
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
            style={{ pointerEvents: 'auto' }}
          />
        )}
      </AnimatePresence>

      {selectedId && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-auto"
          onClick={(e) => e.target === e.currentTarget && setSelectedId(null)}
          style={{ isolation: 'isolate' }}
        >
          <motion.div
            layoutId={isMobile ? undefined : selectedId}
            className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden"
            style={{ 
              willChange: 'transform',
              zIndex: 51
            }}
          >
            {galleryImages.map(
              (image) =>
                image.id === selectedId && (
                  <Image
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                )
            )}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface/98">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="section-heading text-white mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl">
              Ready to Create Your Dream Space?
            </h3>
            <p className="text-zinc-400 tracking-wide mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Let's discuss your vision and bring your custom cabinetry dreams to life. Schedule a consultation with our design team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg sm:rounded-xl shadow-md hover:bg-primary/90 transition font-semibold text-sm sm:text-base"
              >
                Schedule Consultation
              </a>
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

