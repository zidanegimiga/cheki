import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer/Footer'
import Privacy from '../components/Privacy'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useMotionValueEvent
} from 'framer-motion'

const LandingPage = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  return (
    <Layout >
      <Hero />
      <Benefits />
      <HowItWorks ref={titleRef} x={5} />      
      <Privacy />
      <Footer />
    </Layout>
  )
}

export default LandingPage
