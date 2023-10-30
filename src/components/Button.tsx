import React from 'react';
import styles from "./Button.module.scss";
import { Inter } from "next/font/google";
import { Button } from '@radix-ui/themes';

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '500', '600']
});

type ButtonProps = {
  title: string;
  buttonAction?: () => void;
}

// const CustomButton: React.FC<ButtonProps> = ({ title, buttonAction }) => {
//   function cleanUpAndhandleButtonClick(e) {
//     e.preventDefaultBehavour();
//     buttonAction();
//   }

//   return (
//     <button className={styles.buttonWrapper} onClick={cleanUpAndhandleButtonClick}>
//       <p className={styles.buttonText}>{title}</p>
//     </button>
//   )
// }

export const CustomButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>((props, forwardedRef) => (
  <Button
    color="cyan"
    highContrast
    {...props}
    className={styles.ColorsMarketingButton}
    ref={forwardedRef}
  />
));

export default CustomButton;