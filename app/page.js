'use client'

import Link from 'next/link'
import Footer from '../components/Footer'
import PlaceholderImage from '../components/PlaceholderImage'
import CardStackSlider from '../components/CardStackSlider'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useScroll, useTransform, motion} from 'motion/react';
import { useRef } from 'react';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },   
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        // target: container,
        // offset: ['start start', 'end end']
        // offset: ["start start", "end start"]
    })
    // const y = useTransform(scrollYProgress, [0, 0.5], [0, -0.5]);
  const pace = -4; 
  const speed5 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 200 * pace]
  )
  const speed4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 150 * pace]
  )
  const speed3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100 * pace]
  )
  const speed2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 50 * pace]
  )
  const speed1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 25 * pace]
  )
  

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
      {/* Hero Section */}
      {/* <Image className='absolute w-full inset-0 object-cover object-top opacity-5' src='/images/herobg.jpg' height={100} width={150} alt='Hero BG' /> */}
      <section id='heroSection' className="
            before:content-['']
            before:absolute
            before:w-full
            before:h-full
            before:saturate-0
            before:blur-[2px]
            before:bg-[url('/images/herobg.jpg')]
            before:bg-cover
            before:bg-center
            before:bg-no-repeat
            before:-z-1
            bg-surface/90 relative flex items-center justify-center">
          <motion.div className='flex flex-col gap-2 pt-24 sm:pt-32 md:pt-40 pb-32 sm:pb-48 md:pb-80 px-4 sm:px-6 text-center'>
            <motion.svg style={{y: speed5}} initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className='max-w-[240px] sm:max-w-md md:max-w-xl mx-auto text-primary' fill='currentColor' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/motion.svg" viewBox="0 0 280.62 50.73">
                  <path className="cls-1" d="M17.2,38.19h.11v3.26H0v-.11c1.83,0,2.27-.88,2.31-4.92v-15.63c-.04-4.04-.48-4.92-2.31-4.92v-.07h16.54v3.26h-.11c-1.17-2.35-2.57-2.9-6.86-2.9h-4.77v12.25h8.29l-.95,2.9h-.11c-.84-1.69-2.38-2.49-5.94-2.49v-.04h-1.28v12.25h5.54c4.29,0,5.69-.51,6.86-2.86Z"/>
                  <path className="cls-1" d="M19.11,41.34c1.58,0,2.02-.84,2.09-4.7v-15.3c-.07-3.89-.51-4.73-2.09-4.73v-.11l4.37-1.14v20.8c.04,4.26.48,5.17,2.09,5.17v.11h-6.46v-.11Z"/>
                  <path className="cls-1" d="M42.18,37.49c-1.14,2.93-3.67,4.4-6.31,4.4-3.96,0-8.11-3.26-8.11-9.83s4.37-9.39,8.29-9.39c5.72,0,6.71,5.32,5.43,7.37h-11.11c-.11.62-.15,1.28-.15,1.98,0,6.02,3.26,8.36,6.38,8.36,2.2,0,4.37-1.17,5.25-3.08l.33.18ZM30.41,29.68h8.77c1.36-2.86-.07-6.57-3.45-6.57-2.57,0-4.73,2.53-5.32,6.57Z"/>
                  <path className="cls-1" d="M61.44,23.18l-7.26,17.94c-.18.48-.62.77-1.1.77s-.92-.33-1.1-.77l-5.39-14.12c-1.25-3.01-1.91-3.74-3.34-3.74v-.07h6.6v.11c-1.65,0-1.72,1.28-.15,5.5l4.22,10.97c.07.18.33.18.4,0l3.89-9.83c2.02-5.1.4-6.68-1.43-6.68v-.07h4.66Z"/>
                  <path className="cls-1" d="M79.08,39.32c-.84,1.76-2.13,2.6-3.23,2.6s-2.09-.95-2.13-2.79v-4.22c-1.14,4.84-4.22,6.97-6.86,6.97-2.38,0-4.4-1.69-4.4-4.62,0-4.07,5.65-5.03,11.23-6.09,0-.11.04-.26.04-.37v-3.78c0-2.6-1.32-4.04-3.04-4.04-1.94,0-4.48,1.87-6.24,6.02h-.04v-3.96c1.94-1.54,4.33-2.31,6.38-2.31,2.86,0,5.17,1.43,5.17,4.26v11.59c0,1.32.55,2.09,1.25,2.09.55,0,1.17-.4,1.8-1.39l.07.04ZM68.07,40.5c2.42,0,5.39-2.53,5.61-8.91-4.62.92-8.66,1.69-8.66,5.65,0,2.05,1.39,3.26,3.04,3.26Z"/>
                  <path className="cls-1" d="M84.65,23.18h2.68v.4h-2.68v17.86h-2.27v-17.86h-2.53v-.29c1.76-.95,3.52-2.68,4.44-4.7h.37v4.59Z"/>
                  <path className="cls-1" d="M97.78,40.39c2.2,0,4.37-1.17,5.25-3.08l.33.18c-1.14,2.93-3.67,4.4-6.31,4.4-3.96,0-8.11-3.26-8.11-9.83s4.4-9.39,8.29-9.39c3.56,0,5.58,2.6,5.58,5.39,0,4.81-9.54,3.85-11.04,7.08.92,3.74,3.52,5.25,6.02,5.25ZM91.4,32.02c0,.84.07,1.65.22,2.35,2.49-3.23,8.99-1.17,8.99-7.08,0-2.27-1.21-4.18-3.78-4.18-2.79,0-5.43,2.9-5.43,8.91Z"/>
                  <path className="cls-1" d="M156.51,10.89c-5.21,0-11.19-.95-17.53-2.24-5.43,5.43-10.38,13.06-15.55,21.31.11.55.18,1.14.18,1.76v5.21c.11,3.59.59,4.4,2.31,4.4v.11h-7.12v-.11c1.83,0,2.27-.88,2.31-4.92v-4.48c0-.81-.18-1.58-.55-2.27l-4.95-8.99c-2.13-3.7-3.19-4.77-4.77-4.77v-.11h4.07-.04,3.08v.11c-1.83,0-1.25,1.83,1.65,6.9l3.08,5.32c.22.4.4.84.55,1.25,4.95-8.36,9.83-15.66,15.11-20.87C123.6,5.43,106.95.4,93.45.4c-25.71,0-28.83,21.79-13.35,27.73l-.15.37C60.51,21.97,60.44,0,93.45,0v.04c14.75,0,31.11,4.95,45.34,8.03,5.13-4.92,10.6-7.85,16.87-7.85h.07c14.86,0,15.66,10.64.77,10.67ZM155.74.59c-6.53,0-11.74,3.23-16.32,7.63,6.24,1.32,12,2.27,17.09,2.27,11.55,0,10.68-9.9-.77-9.9Z"/>
                  <path className="cls-1" d="M136.4,41.89c-10.45,0-10.45-19.22,0-19.22s10.49,19.22,0,19.22ZM136.4,23.07c-7.15,0-7.15,18.41,0,18.41s7.19-18.41,0-18.41Z"/>
                  <path className="cls-1" d="M162.7,38.59c0,1.32.51,2.09,1.25,2.09.55,0,1.17-.44,1.76-1.43l.11.04c-.84,1.76-2.13,2.6-3.23,2.6-1.17,0-2.16-.95-2.16-2.86v-2.82c-.99,3.78-3.81,5.69-6.49,5.69-2.82,0-5.47-2.13-5.47-6.46v-6.75c-.07-3.85-.51-4.7-2.09-4.7v-.11l4.37-1.14v12.69c0,3.78,1.94,5.58,4.07,5.58,2.6,0,5.46-2.57,5.61-7.34v-4.99c-.04-3.85-.51-4.7-2.09-4.7v-.11l4.37-1.14v15.85Z"/>
                  <path className="cls-1" d="M176.53,22.74c1.5,0,3.08.73,4.37,2.13l-.22,3.93h-.04c-1.14-3.63-2.97-5.25-4.7-5.25-2.16,0-4.11,2.57-4.11,6.97v5.61c.04,4.29.48,5.21,2.09,5.21v.11h-6.46v-.11c1.58,0,2.02-.84,2.09-4.73v-7.92c-.07-3.89-.51-4.73-2.09-4.73v-.07l4.37-1.17v3.96c.88-2.68,2.75-3.93,4.7-3.93Z"/>
                  <path className="cls-1" d="M209.03,35.51c0,4.55-3.85,6.42-8.37,6.42-2.79,0-5.83-.73-8.36-1.98l.18-4.55h.04c1.61,4.15,5.13,6.02,8.22,6.02s5.58-1.76,5.58-4.95c0-5.98-13.06-8.44-13.06-14.97,0-4.07,3.38-6.16,7.41-6.16,2.24,0,4.66.66,6.82,1.98l-.18,4.51h-.04c-2.02-4.4-4.8-6.2-7.12-6.2s-4.18,1.91-4.18,4.92c0,5.47,13.06,8.03,13.06,14.97Z"/>
                  <path className="cls-1" d="M217.42,41.45h-1.8v3.96c.04,4.29.48,5.21,2.09,5.21v.11h-6.46v-.11c1.58,0,2.02-.84,2.09-4.73v-17.2c-.07-3.89-.51-4.73-2.09-4.73v-.07l4.37-1.17v5.76c1.1-3.85,3.71-5.72,6.24-5.72,3.08,0,6.05,2.79,6.05,8.14,0,6.16-3.56,10.56-10.49,10.56ZM217.42,41.05c5.06,0,7.92-3.74,7.92-10.16,0-4.62-2.24-7.04-4.55-7.04-2.53,0-5.17,2.86-5.17,8.91v8.29h1.8Z"/>
                  <path className="cls-1" d="M247.35,39.32c-.84,1.76-2.13,2.6-3.23,2.6s-2.09-.95-2.13-2.79v-4.22c-1.14,4.84-4.22,6.97-6.86,6.97-2.38,0-4.4-1.69-4.4-4.62,0-4.07,5.65-5.03,11.22-6.09,0-.11.04-.26.04-.37v-3.78c0-2.6-1.32-4.04-3.04-4.04-1.95,0-4.48,1.87-6.24,6.02h-.04v-3.96c1.94-1.54,4.33-2.31,6.38-2.31,2.86,0,5.17,1.43,5.17,4.26v11.59c0,1.32.55,2.09,1.25,2.09.55,0,1.17-.4,1.8-1.39l.07.04ZM236.35,40.5c2.42,0,5.39-2.53,5.61-8.91-4.62.92-8.66,1.69-8.66,5.65,0,2.05,1.39,3.26,3.04,3.26Z"/>
                  <path className="cls-1" d="M263.42,37.49c-1.14,2.93-3.67,4.4-6.31,4.4-3.96,0-8.11-3.26-8.11-9.83s4.47-9.39,8.4-9.39c2.24,0,4.29.84,5.25,2.2l.04,3.93h-.04c-1.14-3.78-3.52-5.72-5.79-5.72-2.75,0-5.39,2.93-5.39,8.95s3.26,8.36,6.38,8.36c2.2,0,4.37-1.17,5.25-3.08l.33.18Z"/>
                  <path className="cls-1" d="M280.62,37.49c-1.14,2.93-3.67,4.4-6.31,4.4-3.96,0-8.11-3.26-8.11-9.83s4.37-9.39,8.29-9.39c5.72,0,6.71,5.32,5.43,7.37h-11.12c-.11.62-.15,1.28-.15,1.98,0,6.02,3.26,8.36,6.38,8.36,2.2,0,4.37-1.17,5.25-3.08l.33.18ZM268.84,29.68h8.77c1.36-2.86-.07-6.57-3.45-6.57-2.57,0-4.73,2.53-5.32,6.57Z"/>
            </motion.svg>
            <motion.p
              style={{y: speed4}}
              className="mx-auto md:-translate-y-5 md:-translate-x-12 bg-linear-to-r text-transparent bg-clip-text from-white via-zinc-100 max-w-max font-medium uppercase italic text-[10px] sm:text-xs tracking-[0.2rem] sm:tracking-[0.3rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Designer Cabinets by Kustomcabs
            </motion.p>
            <motion.h3 style={{y: speed3}} className='section-heading text-white text-xl sm:text-2xl md:text-3xl px-2'>Timeless craftsmanship meets modern design.</motion.h3>
            <motion.p style={{y: speed2}} className='tracking-wide text-zinc-300 text-sm sm:text-base px-2'>We transform everyday spaces into expressions of refined living. <br className='hidden sm:block' /> <span className='max-sm:hidden'>Featuring premium cabinetry from <span className='text-primary'>Bellmont Cabinets</span> and <span className='text-primary'>Procraft Cabinetry</span>.</span></motion.p>
          </motion.div>          
      </section>    
        <CardStackSlider />
      <section id='valuejProps' className='py-12 sm:py-16 md:py-24'>
        <div className='grid grid-cols-12 px-4 sm:px-6 max-w-6xl mx-auto gap-6 md:gap-12'>
          <div className='col-span-12 md:col-span-6'>
            <div className='flex -space-x-8 sm:-space-x-12 md:-space-x-20 justify-start'>
              <motion.div style={{y: speed1}} className='scale-90 relative overflow-hidden md:w-1/2 w-full rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl aspect-3/5'>
                <Image className='absolute w-full object-cover h-full' src='/images/services-kitchen_remodel.jpg' alt='image' width={1600} height={900} />
              </motion.div>
              <motion.div style={{y: speed3}} className='scale-95 relative overflow-hidden md:w-1/2 w-full rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl aspect-3/5'>
                <Image className='absolute w-full object-cover h-full' src='/images/services-bathroom_remodel.jpg' alt='image' width={1600} height={900} />
              </motion.div>
            </div>
          </div>
          <div style={{y: speed1}} className='col-span-12 md:col-span-6 flex flex-col justify-center'>
            <motion.h3 className='section-heading text-xl sm:text-2xl md:text-3xl'>Kitchen & Bath Remodels</motion.h3>
            <motion.p className='tracking-wide text-sm sm:text-base mt-2 sm:mt-4'>Transforming spaces with precision craftsmanship. We focus on kitchen and bathroom remodels that combine thoughtful design and premium materials.</motion.p>
            <Link href="/services">
              <button className="mt-4 sm:mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-white rounded-lg sm:rounded-xl shadow-md hover:bg-primary/90 transition font-semibold text-sm sm:text-base">
                View Our Services
              </button>
          </Link>
          </div>
        </div>
      </section>

      {/* Materials & Finishes Section */}
      <section id='materials' className='py-12 sm:py-16 md:py-24 bg-zinc-50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className='text-center mb-8 sm:mb-12 md:mb-16'
          >
            <h3 className='section-heading text-surface-light text-xl sm:text-2xl md:text-3xl'>Premium Materials & Finishes</h3>
            <p className='tracking-wide max-w-2xl mx-auto text-sm sm:text-base px-2'>
              Every detail matters. We source only the finest materials to ensure your cabinetry stands the test of time.
            </p>
          </motion.div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
            {[
              {
                title: 'Hardwood Selection',
                description: 'Premium oak, maple, cherry, and walnut sourced from sustainable forests.',
                features: ['Solid wood construction', 'Custom grain matching', 'Eco-friendly sourcing']
              },
              {
                title: 'Luxury Finishes',
                description: 'Hand-applied stains and paints in an extensive palette of colors.',
                features: ['Custom color matching', 'Durable topcoats', 'Distressed & aged options']
              },
              {
                title: 'Hardware & Accents',
                description: 'Curated selection of premium hardware from leading manufacturers.',
                features: ['Soft-close mechanisms', 'Custom pulls & knobs', 'Integrated lighting']
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow'
              >
                <h4 className='small-heading text-surface-light mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl'>{item.title}</h4>
                <p className='mb-4 sm:mb-6 tracking-wide text-sm sm:text-base'>{item.description}</p>
                <ul className='space-y-2'>
                  {item.features.map((feature) => (
                    <li key={feature} className='text-sm flex items-center'>
                      <span className='text-primary mr-2'>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id='process' className='py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/images/bg-kitchen-sketch.webp")] opacity-5 bg-cover bg-center'></div>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 relative z-10'>
          <div className='grid grid-cols-12 gap-6 md:gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className='col-span-12 md:col-span-6'
            >
              <h3 className='section-heading text-surface-light text-xl sm:text-2xl md:text-3xl'>Our Design Process</h3>
              <p className='tracking-wide mb-6 sm:mb-8 text-sm sm:text-base'>
                From initial consultation to final installation, we guide you through every step with expertise and care.
              </p>
              <div className='space-y-6'>
                {[
                  { step: '01', title: 'Consultation', desc: 'We listen to your vision and assess your space to understand your needs.' },
                  { step: '02', title: 'Design & Planning', desc: 'Our designers create detailed plans and 3D renderings for your approval.' },
                  { step: '03', title: 'Fabrication', desc: 'Skilled craftsmen bring your design to life using premium materials.' },
                  { step: '04', title: 'Installation', desc: 'Expert installation ensures a perfect fit and flawless finish.' }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='flex gap-3 sm:gap-4'
                  >
                    <div className='shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center'>
                      <span className='text-primary font-semibold text-sm sm:text-base'>{item.step}</span>
                    </div>
                    <div>
                      <h5 className='font-semibold text-surface-light mb-1 text-sm sm:text-base'>{item.title}</h5>
                      <p className='text-xs sm:text-sm tracking-wide'>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className='col-span-12 md:col-span-6'
            >
              <div className='relative overflow-hidden rounded-3xl shadow-2xl aspect-4/5'>
                <Image 
                  className='absolute w-full h-full object-cover' 
                  src='/images/services-kitchen_remodel.jpg' 
                  alt='Design process' 
                  width={800} 
                  height={1000} 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id='why-choose' className='py-12 sm:py-16 md:py-24 bg-surface'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className='text-center mb-8 sm:mb-12 md:mb-16'
          >
            <h3 className='section-heading text-white text-xl sm:text-2xl md:text-3xl'>Why Choose Kustomcabs</h3>
            <p className='tracking-wide text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base px-2'>
              Decades of experience, uncompromising quality, and a commitment to excellence in every project.
            </p>
          </motion.div>
          
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
            {[
              { number: '25+', label: 'Years Experience', icon: '' },
              { number: '500+', label: 'Projects Completed', icon: '' },
              { number: '100%', label: 'Satisfaction Rate', icon: '' },
              { number: '2', label: 'Premium Brands', icon: '' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='text-center p-4 sm:p-5 md:p-6 bg-surface-light/50 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-zinc-800/50'
              >
                <div className='text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4'>{stat.icon}</div>
                <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2'>{stat.number}</div>
                <div className='text-zinc-400 text-xs sm:text-sm tracking-wide'>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8'
          >
            <div className='bg-surface-light p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-zinc-800/50'>
              <h4 className='small-heading text-white mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl'>Expert Craftsmanship</h4>
              <p className='text-zinc-400 tracking-wide text-sm sm:text-base'>
                Our master craftsmen bring decades of experience to every project, ensuring attention to detail and quality that exceeds expectations.
              </p>
            </div>
            <div className='bg-surface-light p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-zinc-800/50'>
              <h4 className='small-heading text-white mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl'>Premium Partnerships</h4>
              <p className='text-zinc-400 tracking-wide text-sm sm:text-base'>
                Exclusive partnerships with <span className='text-primary'>Bellmont Cabinets</span> and <span className='text-primary'>Procraft Cabinetry</span> give you access to the finest cabinetry available.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id='testimonials' className='py-12 sm:py-16 md:py-24 bg-white'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className='text-center mb-8 sm:mb-12 md:mb-16'
          >
            <h3 className='section-heading text-surface-light text-xl sm:text-2xl md:text-3xl'>What Our Clients Say</h3>
            <p className='tracking-wide text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base px-2'>
              Don't just take our word for it. Here's what homeowners say about working with us.
            </p>
          </motion.div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
            {[
              {
                quote: 'The attention to detail in our kitchen remodel exceeded all expectations. Every cabinet feels like a work of art.',
                author: 'Sarah & Michael Chen',
                location: 'San Francisco, CA',
                rating: 5
              },
              {
                quote: 'From design to installation, the team was professional and made the entire process seamless. Our new kitchen is stunning.',
                author: 'Jennifer Martinez',
                location: 'Los Angeles, CA',
                rating: 5
              },
              {
                quote: 'The quality of craftsmanship is outstanding. We couldn\'t be happier with our custom bathroom cabinetry.',
                author: 'Robert & Linda Thompson',
                location: 'Seattle, WA',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-zinc-50 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg'
              >
                <div className='flex mb-3 sm:mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className='text-primary text-base sm:text-lg md:text-xl'>⭐</span>
                  ))}
                </div>
                <p className='text-zinc-700 mb-4 sm:mb-6 tracking-wide italic text-sm sm:text-base'>
                  "{testimonial.quote}"
                </p>
                <div className='border-t border-zinc-200 pt-3 sm:pt-4'>
                  <p className='font-semibold text-surface-light text-sm sm:text-base'>{testimonial.author}</p>
                  <p className='text-xs sm:text-sm'>{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}