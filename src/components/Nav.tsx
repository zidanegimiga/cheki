import React from 'react';
import styles from "./Nav.module.scss"
import Logo from "../../public/Group 14.svg"
import CustomButton from './Button';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter()

  const handleBtnClick = () =>{
    router.push("/#sign-up")
  }
  return (
    <div className={styles.navHeader}>
      <Logo />
      <CustomButton asChild size={{ initial: '3', xs: '4' }} onClick={handleBtnClick}>
        <a>
          Contact us
          <svg
            width="14"
            height="14"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
            style={{ opacity: 1, marginRight: -3 }}
          >
            <path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z" />
          </svg>
        </a>
      </CustomButton>
    </div>
  )
}

export default Nav