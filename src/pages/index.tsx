import { useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer/Footer';
import Privacy from '../components/Privacy';
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

const Index = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll()

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

export default Index;
