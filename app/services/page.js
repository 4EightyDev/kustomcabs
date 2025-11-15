'use client'

import { motion } from 'motion/react'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from '../../components/ServiceCard'

export default function Services() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <>
      {/* Services List */}
      <section className="relative bg-zinc-950">
        <div className="px-6 text-center bg-white relative pt-[calc(100px+3rem)] pb-24 bg-[url('/images/bg-kitchen-sketch.webp')] bg-cover bg-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="page-heading text-zinc-900"
          >
            What We Offer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="max-w-3xl mx-auto"
          >
            Transforming spaces with precision craftsmanship. We focus on kitchen and bathroom remodels that combine thoughtful design and premium materials.
          </motion.p>
        </div>
        <div className="px-6 pb-4 space-y-12">
          <ServiceCard
            id="kitchen-remodels"
            title="Kitchen Remodels"
            imageSrc="/images/services-kitchen_remodel.jpg"
            bullets={[
              'Custom cabinet design and installation',
              'Full layout and workflow optimization',
              'High-end materials and finishes',
              'Integrated lighting and appliance planning'
            ]}
          >
            {/* description slot can be passed as children if needed in future */}
          </ServiceCard>

          <ServiceCard
            id="bathroom-remodels"
            title="Bathroom Remodels"
            imageSrc="/images/services-bathroom_remodel.jpg"
            bullets={[
              'Vanity and storage custom solutions',
              'Wet area planning and waterproofing',
              'Spa-inspired fixtures and finishes',
              'Accessible and modern design options'
            ]}
            reverse
          />
        </div>
      </section>

      <Footer />
    </>
  )
}