'use client'

import { motion } from 'motion/react'

export default function PlaceholderImage({ className = '', delay = 0 }) {
  return (
    <motion.div 
      className={`relative bg-zinc/20 border border-zinc/30 rounded-lg flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-center p-4">
        <div className="mx-auto bg-gray-200 border-2 border-dashed border-gray-300 rounded-xl w-16 h-16 mb-4" />
        <p className="text-zinc text-sm">Luxury Cabinetry Image</p>
      </div>
    </motion.div>
  )
}
