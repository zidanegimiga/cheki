import React, { forwardRef, useEffect, useRef, useState } from 'react';
import styles from "./Hero.module.scss";
import Image from 'next/image';
import CustomButton from '../Button';
import { Bebas_Neue } from "next/font/google";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    useMotionValueEvent,
    useAnimation,
    useInView,
    Variant
} from 'framer-motion'
import { wrap } from "@motionone/utils";
import { useRouter } from 'next/router';

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    variable: '--font-bebas',
    weight: ['400']
});

type MyComponentProps = {
    opacity: any;
}

type AnimatedTextProps = {
    text: string | string[];
    el?: keyof JSX.IntrinsicElements;
    className?: string;
    once?: boolean;
    repeatDelay?: number;
    animation?: {
        hidden: Variant;
        visible: Variant;
    };
};

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
        },
    },
};

export const AnimatedText = ({
    text,
    el: Wrapper = "h1",
    className,
    once,
    repeatDelay,
    animation = defaultAnimations,
}: AnimatedTextProps) => {
    const controls = useAnimation();
    const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once });

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const show = () => {
            controls.start("visible");
            if (repeatDelay) {
                timeout = setTimeout(async () => {
                    await controls.start("hidden");
                    controls.start("visible");
                }, repeatDelay);
            }
        };

        if (isInView) {
            show();
        } else {
            controls.start("hidden");
        }

        return () => clearTimeout(timeout);
    }, [isInView]);

    return (
        <Wrapper className={className}>
            <motion.span
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {},
                }}
                aria-hidden
                className={styles.h1Class}
            >
                {textArray.map((line, lineIndex) => (
                    <span className={styles.h1Class} key={`${line}-${lineIndex}`}>
                        {line.split(" ").map((word, wordIndex) => (
                            <span className={styles.h1Class} key={`${word}-${wordIndex}`}>
                                {word.split("").map((char, charIndex) => (
                                    <motion.span
                                        key={`${char}-${charIndex}`}
                                        className={styles.h1Class}
                                        variants={animation}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <span className={styles.h1Class}>&nbsp;</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    );
};

const Hero = ({ baseVelocity = 100 }) => {
    const [email, setEmail] = useState("");
    const router = useRouter();

    function handleSubmit() {
        router.reload()
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const x = useMotionValue(0)

    useMotionValueEvent(x, "animationStart", () => {
        console.log("animation started on x")
    })

    useMotionValueEvent(x, "change", (latest) => {
        console.log("x changed to", latest)
    })

    const handleJoinWaitList = () => {
        // setloading to true
        // open connection and send email -- possibly use Firebase
        // get success status back
        // open up modal
        // show status and message
        // set loading to false
    }


    return (
        <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }} className={styles.heroWrapper}>
            <motion.div className={styles.heroHeader} >
                <div className={styles.titleGroup} >
                    <div className={styles.h1Class}>
                        <AnimatedText
                            el="h1"
                            text={'C.H.E.K.I'}
                            className={styles.h1Class}
                            repeatDelay={10000}
                        />
                    </div>
                    <div className={bebasNeue.className}>
                        <p className={styles.spanClass}>COGNITIVE HUMAN ENHANCEMENT KINETIC INTERFACE</p>
                    </div>
                </div>
                <div className={styles.secondaryHeader}>
                    <h2 className={bebasNeue.className}> INTRODUCING BRAIN INTERFACE CHIPS </h2>
                    <span className={bebasNeue.className}> UNLEASHING THE POWER OF YOUR MIND </span>
                </div>
            </motion.div>
            <div className={styles.imageContainer}>
                <Image width={780} height={780} src={"/heroImg.png"} alt='hero' priority />
            </div>
            <div className={styles.inputWrapper}>
                <div className={styles.inputContainer}>
                    <input value={email} onChange={handleEmailChange} placeholder='Enter your email' />
                    <button className={styles.emailButton} onClick={handleSubmit}>JOIN THE WAITLIST</button>
                </div>
            </div>
        </motion.div>
    )
}

export default Hero;