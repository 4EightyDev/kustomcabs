"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

export default function ServiceCard({
  title,
  imageSrc,
  bullets = [],
  ctaText = 'Schedule Consultation',
  href = '/contact',
  reverse = false,
  id
}) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="grid gap-4 sm:gap-6 md:grid-cols-2 items-center bg-zinc-900 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto my-6 sm:my-8 md:my-12"
    >
      {!reverse ? (
        <div className="relative h-48 sm:h-64 md:h-96">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
          <div className="absolute left-0 top-0 h-full w-0.5 sm:w-1 bg-primary" />
        </div>
      ) : null}

      <div className="p-5 sm:p-6 md:p-8 lg:p-12">
        <div className="flex items-center text-white gap-2 sm:gap-3 mb-3 sm:mb-4">
          <h3 className="section-heading text-xl sm:text-2xl md:text-3xl">{title}</h3>
        </div>

        <div className="text-zinc-300 mb-3 sm:mb-4 text-sm sm:text-base">{/* description slot handled by caller */}</div>

        {bullets?.length ? (
          <ul className="text-zinc-400 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 list-inside list-disc text-sm sm:text-base">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        ) : null}

        <Link href={href} className="inline-block bg-primary text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:opacity-95 text-sm sm:text-base">
          {ctaText}
        </Link>
      </div>

      {reverse ? (
        <div className="relative h-48 sm:h-64 md:h-96">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
          <div className="absolute left-0 top-0 h-full w-0.5 sm:w-1 bg-primary" />
        </div>
      ) : null}
    </motion.div>
  )
}
