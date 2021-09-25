import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { FadeInUp } from '../Animations'

export default function InViewDiv(props) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
  }, [controls, inView])

  return (
    <motion.div {...props} ref={ref} initial="hidden" animate={controls}>
      {props.children}
    </motion.div>
  )
}
