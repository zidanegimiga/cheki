import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from "next/router"
import Nav from './Nav'
import styles from "./Layout.module.scss";
import Image from 'next/image'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => {
  const [scrollYProgress, setScrollYProgress] = useState<number>()
  const [viewportHeight, setViewportHeight] = useState<number>(0)

  const layoutRef = useRef<HTMLDivElement>(null)

  const router = useRouter();
  const pathname = router.pathname
  const nameArray = pathname.split('');
  nameArray.shift();
  const headerTitle = nameArray.join("");

  useEffect(() => {
    setViewportHeight(window.innerHeight);

    function handleScroll() {
      setScrollYProgress(window.scrollY);
      console.log("Scroll: ", scrollYProgress)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.layout} ref={layoutRef}>
      <Head>
        <title>{headerTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={{
        width: "100%",
        position: "fixed",
        top: scrollYProgress > 260 ? 0 : -100,
        backgroundColor: "#8D5B16",
        transition: "ease-in-out all 0.5s",
        zIndex: 2
      }}>
        <Nav />
      </div>

      <div className={styles.content}>
        <Nav />
        {children}
      </div>
      <button className={styles.magicButton} style={{display: "none"}}>
        <Image src={"/blueLogo.svg"} width={32} height={32} alt='logo' />
      </button>
    </div>
  )
}

export default Layout
