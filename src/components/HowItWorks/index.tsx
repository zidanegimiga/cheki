import styles from "./styles.module.scss";
import NeuralNetwork from "../../../public/eos-icons_neural-network.svg"
import Filter from "../../../public/clarity_filter-line.svg"
import Feature from "../../../public/carbon_ibm-process-mining.svg"
import Pattern from "../../../public/eos-icons_patterns-outlined.svg"
import Action from "../../../public/eos-icons_action-chains.svg"
import Loop from "../../../public/twemoji_curly-loop.svg"
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";

const HowItWorks = forwardRef<HTMLDivElement, any>(({ x }, ref) => {
    const [cardWidth, setCardWidth] = useState(0);
    const [cardHeight, setCardHeight] = useState(0);

    function SectionCard({ title, description, icon }) {
        const cardRef = useRef<HTMLDivElement>();

        useEffect(() => {
            setCardWidth(cardRef.current.clientWidth);
            setCardHeight(cardRef.current.clientHeight);
            console.log("Card width: ", cardWidth)
        }, [])
        return (
            <AnimatePresence>
                <div className={styles.sectionCardWrapper} ref={cardRef}>
                    <div className={styles.sectionCardLeft}>
                        <h2>{title}</h2>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className={styles.sectionCardRight}>
                        {icon}
                    </div>
                </div>
            </AnimatePresence>
        )
    }

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;

        const handleScroll = () => {
            if (container.scrollLeft + container.clientWidth === container.scrollWidth) {
                console.log("End of scroll detected");
            }
        };

        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
        <motion.div className={styles.componentWrapper}>
            <div className={styles.titleContainer}>THIS IS HOW CHEKI WORKS</div>
            <div className={styles.sectionDescription}>
                Leveraging the principles of <span>neural signal processing</span> and <span>neuro-technology</span> to establish a direct connection between the human brain and an external computing system.
            </div>

            <div className={styles.cardsContainer}>
                <button className={styles.LeftBtn} onClick={() => handleButtonScroll("left")}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </button>
                <button className={styles.RightBtn} onClick={() => handleButtonScroll("right")}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </button>
                <motion.div className={styles.sectionCardsContainer} style={{ height: cardHeight + 40 }} ref={scrollContainerRef}>
                    <SectionCard
                        icon={<NeuralNetwork />}
                        title={"Neural Signal Acquisition"}
                        description={"C.H.E.K.I employs specialized sensors or electrodes that are strategically placed within or near specific regions of the brain. These sensors detect and record the electrical activity generated by the neurons in the form of neural signals."}
                    />
                    <SectionCard
                        icon={<Filter />}
                        title={"Signal Amplification and Filtering"}
                        description={"The recorded neural signals are weak and susceptible to noise. C.H.E.K.I incorporates amplification and filtering mechanisms to enhance the strength of the signals while minimizing unwanted noise and artifacts."}
                    />
                    <SectionCard
                        icon={<Feature />}
                        title={"Signal Processing and Feature Extraction"}
                        description={"The amplified neural signals are subjected to advanced signal processing algorithms. These algorithms extract relevant features from the neural signals, such as firing patterns, frequency content, and spatial distribution, to decode the intended cognitive information."}
                    />
                    <SectionCard
                        icon={<Pattern />}
                        title={"Pattern Recognition and Decoding"}
                        description={"The processed neural signals are then fed into pattern recognition algorithms, such as machine learning models or artificial neural networks. These algorithms analyze the patterns in the neural signals and map them to specific commands or intentions based on the learned associations between neural activity and corresponding actions."}
                    />
                    <SectionCard
                        icon={<Action />}
                        title={"Action Generation and Output"}
                        description={"Once the decoded intentions are identified, C.H.E.K.I translates them into actionable commands or outputs. These outputs can control external devices, applications, or interfaces, enabling the user to interact with technology or perform tasks through their thoughts alone."}
                    />
                    <SectionCard
                        icon={<Loop />}
                        title={"Closed-Loop Feedback"}
                        description={"In some cases, C.H.E.K.I may also incorporate a closed- loop feedback system. This involves providing sensory feedback to the user, such as visual or haptic cues, based on the actions performed by the BIC. This feedback loop helps the user to better understand and adjust their cognitive intentions, fostering a more effective brain-computer interaction."}
                    />
                </motion.div>
            </div>
        </motion.div>
    )
})

export default HowItWorks
