import React, { useEffect, useRef, useState } from 'react';
import styles from "./styles.module.scss";
import { Grid, Heading, Section, Text } from '@radix-ui/themes';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";


type SectionCardProps = {
    title: string,
    description: string,
    icon?: any
}

const Privacy = () => {
    const [cardWidth, setCardWidth] = useState(0);
    const [cardHeight, setCardHeight] = useState(0);

    function SectionCard({ title, description, icon }: SectionCardProps) {
        const ctrls = useAnimation();

        const { ref, inView } = useInView({
            threshold: 0.5,
            triggerOnce: true,
        });

        useEffect(() => {
            if (inView) {
                ctrls.start("visible");
            }
            if (!inView) {
                ctrls.start("hidden");
            }
        }, [ctrls, inView]);

        const characterAnimation = {
            hidden: {
                opacity: 0,
                y: `0.25em`,
            },
            visible: {
                opacity: 1,
                y: `0em`,
                transition: {
                    duration: 1,
                    ease: [0.2, 0.65, 0.3, 0.9],
                },
            },
        };

        const cardRef = useRef<HTMLDivElement>();
        const blobRef = useRef<HTMLDivElement>();
        const fakeBlobRef = useRef<HTMLDivElement>();

        const handleMouseMove = (ev) => {
            const card = cardRef.current;
            const blob = blobRef.current;
            const fblob = fakeBlobRef.current;
            const rec = fblob.getBoundingClientRect();
            blob.style.transform = `translate(${ev.clientX - rec.left - rec.width / 2}px, ${ev.clientY - rec.top - rec.height / 2}px)`;
        };

        useEffect(() => {
            setCardWidth(cardRef.current.clientWidth);
            setCardHeight(cardRef.current.clientHeight);
            console.log("Card width: ", cardWidth)
        }, [])

        useEffect(() => {
            window.addEventListener("mousemove", handleMouseMove);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        }, []);


        return (
            <AnimatePresence>
                <div className={styles.sectionCardWrapper} ref={cardRef}>
                    <div className={styles.inner}>
                        <div className={styles.sectionCardLeft}>
                                <h2
                                >
                                    {title}
                                </h2>
                            <p>
                                {description}
                            </p>
                        </div>
                        <div className={styles.sectionCardRight}>
                            {icon}
                        </div>
                    </div>
                    <div className={styles.blob} ref={blobRef}></div>
                    <div className={styles.fakeblob} ref={fakeBlobRef}></div>
                </div>
            </AnimatePresence>
        )
    }

    const scrollContainerRef = useRef<HTMLDivElement>(null);


    const handleButtonScroll = (direction) => {
        const container = scrollContainerRef.current;

        if (container) {
            if (direction === 'left') {
                container.scrollLeft -= cardWidth;
            } else if (direction === 'right') {
                container.scrollLeft += cardWidth;
            }
        }
    };

    return (
        <div className={styles.componentWrapper}>
            <motion.h2 className={styles.titleContainer} > Benefits</motion.h2 >
            <div className={styles.sectionDescription}>
                Leveraging the principles of <span>neural signal processing</span> and <span>neuro-technology</span> to establish a direct connection between the human brain and an external computing system.
            </div>

            < AnimatePresence >
                <Section size={{ initial: '1', md: '3' }}>
                    <Grid columns={{ initial: '1', xs: '1', sm: '2', md: '3', lg: '4' }} gap={{ initial: '2', xs: '1', sm: '2', md: '3', lg: '3', xl: '4' }}>
                        <SectionCard
                            // icon={<NeuralNetwork />}
                            title={"Enhanced Creativity"}
                            description={"Compose music and create art effortlessly by translating your imaginative thoughts directly into tangible forms, empowering you to bring your creative visions to life with unparalleled speed and precision."}
                        />
                        <SectionCard
                            // icon={<Filter />}
                            title={"Optimized Productivity"}
                            description={"Effortlessly streamline your workflow and accomplish tasks with remarkable efficiency. Say goodbye to physical input devices as C.H.E.K.I enables you to seamlessly translate your thoughts into actions, making multitasking and project management a breeze."}
                        />
                        <SectionCard
                            // icon={<Feature />}
                            title={"Inclusive Accessibility"}
                            description={"Empowering individuals with motor impairments, C.H.E.K.I transcends physical disabilities, offering a seamless way to navigate digital interfaces, control prosthetic limbs, and communicate effortlessly using their thoughts alone. Join us in building a more inclusive and equitable society with C.H.E.K.I."}
                        />
                        <SectionCard
                            // icon={<Pattern />}
                            title={"Futuristic Interaction"}
                            description={"Step into a new era of human-computer interaction, where the boundaries between mind and machine blur. Experience a world where your thoughts seamlessly merge with technology, allowing you to interact with the digital realm in ways previously unimaginable."}
                        />
                        <SectionCard
                            // icon={<Action />}
                            title={"Empowering Innovation"}
                            description={"Be at the forefront of innovation with C.H.E.K.I, as it opens up a world of limitless possibilities for research and development in various fields. Join us in revolutionizing the way we interact with technology and shaping the future of human-machine integration"}
                        />
                        <SectionCard
                            // icon={<Loop />}
                            title={"Lifelong Learning and Skill Enhancement"}
                            description={"Embark on a journey of continuous learning and skill enhancement, as C.H.E.K.I facilitates direct access to information and knowledge. Engage with educational resources and expand your expertise effortlessly, empowering you to evolve and grow in your personal and professional endeavors."}
                        />
                    </Grid>
                </Section>
            </AnimatePresence >
        </div>
    )
}

export default Privacy


    