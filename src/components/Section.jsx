import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function Section({ children, className = '', as: Tag = 'section', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '0px 0px -20% 0px', once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  return (
    <Tag ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } }
        }}
      >
        {children}
      </motion.div>
    </Tag>
  )
}

export function FadeItem({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -20% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
