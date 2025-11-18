'use client'

import { cn } from '@heroui/react'
import { AnimatePresence, stagger } from 'motion/react'
import * as motion from 'motion/react-client'
import { useEffect, useRef, useState } from 'react'

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null)
    const { height } = useDimensions(containerRef)

    return (
        <>
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
            <div className="z-50 relative flex justify-start items-stretch flex-1 max-w-full md:hidden pt-0">
                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    ref={containerRef}
                    className="w-full"
                >
                    
                    <Navigation />
                    
                </motion.nav>
            </div>
            <AnimatePresence>
                {
                    isOpen &&
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .6 }}
                    layoutId="mobile-menu-background"
                    className='w-screen h-screen fixed inset-0 bg-surface/95 z-40'></motion.div>
                }
            </AnimatePresence>
        </>
    )
}

const navVariants = {
    open: {
        transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
    },
    closed: {
        transition: { delayChildren: stagger(0.05, { from: "last" }) },
    },
}

const Navigation = () => (
    <motion.ul className="list-none absolute top-0 w-full" variants={navVariants}>
        {[0, 1, 2, 3, 4].map((i) => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
)

const itemVariants = {
    open: {
        y: 50,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y:100,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

const MenuItem = ({ i }) => {
    const border = `2px solid ${colors[i]}`
    return (
        <motion.li
            className="flex items-center justify-start p-0 m-0 list-none mb-[20px] cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div style={{ width: 40, height: 40, borderRadius: '50%', flex: '40px 0', marginRight: 20, border }} />
            <div style={{ borderRadius: 5, width: 200, height: 20, flex: 1, border }} />
        </motion.li>
    )
}

const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
}

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
)

const MenuToggle = ({ isOpen, toggle }) => (
    <button className={cn(
        'z-50 md:hidden outline-none border-none cursor-pointer w-8 h-full justify-center items select-none flex flex-col *:block *:w-8 *:h-px *:bg-white',
        toggle == isOpen ? 'gap-4' : 'gap-2'
        )}
        onClick={toggle}>
        <span />
        <span />
    </button>
)

const useDimensions = (ref) => {
    const dimensions = useRef({ width: 0, height: 0 })

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth
            dimensions.current.height = ref.current.offsetHeight
        }
    }, [ref])

    return dimensions.current
}
