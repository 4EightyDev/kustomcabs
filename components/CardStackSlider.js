'use client'

import { motion, AnimatePresence, useInView } from 'motion/react'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import classnames from 'tailwindcss-classnames'

const CardStackSlider = () => {
  const [cards, setCards] = useState([
    { id: 1, img: '/images/slideshow-1.jpg', title: 'Custom Cabinet Design 1' },
    { id: 2, img: '/images/slideshow-2.jpg', title: 'Custom Cabinet Design 2' },
    { id: 3, img: '/images/slideshow-3.jpg', title: 'Custom Cabinet Design 3' },
    // { id: 4, img: '/images/slideshow-4.jpg', title: 'Custom Cabinet Design 4' },
    // { id: 5, img: '/images/slideshow-5.jpg', title: 'Custom Cabinet Design 5' },
  ])

  const [isDragging, setIsDragging] = useState(false)
  const [hovered, setHovered] = useState(true)
  const mobileSliderRef = useRef(null)
  const whileInView = useInView(mobileSliderRef, { once: false, amount: 0.5 })
  // No need for controls since we're using direct animation states

  const shuffleVariantsMobile = {
    initial: (index) => ({
      scale: 1 - index * 0.05,
      y: index * 0,
      x: index * 0 ,
      rotate: (index - 1) * 0,
    }),
    visible: (index) => ({
      scale: 1 - index * 0.03,
      y: index * 5,
      x: index * -10,
      rotate: (index - 1) * -4,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        // delay: index * 0.1
      }
    }),
    exit: {
      x: -100,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  }
  const shuffleVariants = {
    // resting state: stacked with slight scale differences, no vertical offset
    rest: (index) => ({
      scale: 1 - index * 0.05,
      y: index * 30,
      x: index * -10,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
    }),
    // fan state: on parent hover children fan out naturally using index
    fan: (index) => ({
      scale: 1 - index * 0.03,
      y: index * 30,
      // rotate: (index - 1) * 1.5,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
    }),
    exit: {
      x: -100,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  }

  // Adjusted thresholds for more natural interaction
  const DRAG_THRESHOLD = 40  // Slightly lower threshold for easier triggering
  const VELOCITY_THRESHOLD = 300  // Lower velocity threshold for more responsive flicks
  // Prevent page scrolling during mobile drag using a gentler approach
  const handleDragStart = () => {
    setIsDragging(true)
    // Only prevent vertical scroll, allow horizontal
    document.body.style.overflowY = 'hidden'
    // Add a class to handle touch behavior
    document.body.classList.add('dragging-card')
  }
  // Handle drag end for swipe gestures with smoother restoration
  const handleDragEnd = (event, info) => {
    const wasDragged = Math.abs(info.offset.x) > DRAG_THRESHOLD || Math.abs(info.velocity.x) > VELOCITY_THRESHOLD
    
    if (wasDragged) {
      if (info.offset.x > 0) {
        handlePrevious()
      } else {
        handleNext()
      }
    }

    // Short delay before re-enabling scroll to prevent jump
    requestAnimationFrame(() => {
      setIsDragging(false)
      document.body.style.overflowY = ''
      document.body.classList.remove('dragging-card')
    })
  }
  const handleNext = () => {
    setCards(prev => {
      const newCards = [...prev]
      const movedCard = newCards.shift()
      newCards.push(movedCard)
      return newCards
    })
  }
  const handlePrevious = () => {
    setCards(prev => {
      const newCards = [...prev]
      const movedCard = newCards.pop()
      newCards.unshift(movedCard)
      return newCards
    })
  }

  return (
    <section className='bg-white min-h-max pb-24 px-12'>
      <div className="relative w-full max-w-6xl mx-auto h-120">
        <motion.div 
          ref={mobileSliderRef}
          id='mobileSlider' 
          className="md:hidden relative w-full max-w-80 mx-auto h-full -translate-y-1/2"
        >
          <AnimatePresence mode="popLayout">
            {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className="absolute inset-0 rounded-2xl shadow-2xl cursor-pointer overflow-hidden aspect-[1/1.5]"
                  style={{
                    zIndex: cards.length - index
                  }}
                  variants={shuffleVariantsMobile}
                  initial="initial"
                  animate={whileInView ? "visible" : "initial"}
                  exit="exit"
                  custom={index}
                  onClick={index === 0 ? handleNext : undefined}
                  drag={index === 0 ? "x" : false}
                  dragConstraints={{ left: -10, right: 10, top: 10, bottom: 10 }}
                  dragElastic={0}
                dragSnapToOrigin
                onDragStart={index === 0 ? handleDragStart : undefined}
                onDragEnd={index === 0 ? handleDragEnd : undefined}
                whileHover={{ scale: index === 0 ? 1.02 : 1 - (index * 0.05) }}
                whileDrag={{ 
                  // scale: 0.98,  // Subtler scale
                  cursor: "grabbing",
                  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.3)",  // Softer shadow
                  // y: -2  // Slight lift
                }}
                transition={{ 
                  duration: 0.25,
                  type: "tween",
                  ease: "easeOut"
                }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image 
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1536px) 90vw, 1536px"
                    priority={index === 0}
                    className="object-cover object-bottom"
                  />
                </div>
                <motion.div 
                  className="absolute inset-0 bg-linear-to-b from-transparent to-black/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </motion.div>
            ))} 
          </AnimatePresence>
        </motion.div>
        
        <motion.div id='desktopSlider' className="max-md:hidden relative w-full max-w-6xl mx-auto h-full -translate-y-60" onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}>
          <AnimatePresence mode="popLayout">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="absolute inset-0 rounded-2xl shadow-2xl cursor-pointer overflow-hidden"
                style={{
                  zIndex: cards.length - index,
                }}
                variants={shuffleVariants}
                initial="initial"
                animate={whileInView ? "animate" : "initial"}
                exit="exit"
                custom={index}
                onClick={index === 0 ? handleNext : undefined}
                whileHover={{ scale: index === 0 ? 1.02 : 1 - (index * 0.05) }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image 
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1536px) 90vw, 1536px"
                    priority={index === 0}
                    className="object-cover object-bottom"
                  />
                </div>
                <motion.div 
                  className="absolute inset-0 bg-linear-to-b from-transparent to-black/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default CardStackSlider