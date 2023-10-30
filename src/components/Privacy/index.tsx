import React, { useEffect, useRef, useState } from 'react'
import styles from "./styles.module.scss";
import { AnimatePresence } from 'framer-motion';

type SectionCardProps ={
    title: string,
    description: string,
    icon?: any
}

const Privacy = () => {
    const [cardWidth, setCardWidth] = useState(0);
    const [cardHeight, setCardHeight] = useState(0);

    function SectionCard({ title, description, icon }: SectionCardProps) {
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
        <div className={styles.componentWrapper}>
            <div className={styles.titleContainer}>Privacy and Security</div>
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
                <div className={styles.sectionCardsContainer} style={{ height: cardHeight + 40 }} ref={scrollContainerRef}>
                    <SectionCard
                        // icon={<NeuralNetwork />}
                        title={"Confidential Neural Data"}
                        description={"At C.H.E.K.I, we prioritize the confidentiality of your neural data. Our advanced encryption protocols ensure that your neural signals and cognitive information remain private and secure, accessible only to authorized devices and applications."}
                    />
                    <SectionCard
                        // icon={<Filter />}
                        title={"Authorized Access Only"}
                        description={"Rest assured that your neural data is accessible only to authorized devices and applications. Our secure communication protocols guarantee that your cognitive information is not compromised and can be accessed solely by trusted sources, ensuring your privacy is maintained at all times."}
                    />
                    <SectionCard
                        // icon={<Feature />}
                        title={"Comprehensive Encryption Measures"}
                        description={"Your peace of mind is our priority. We employ comprehensive encryption measures that safeguard your neural data from unauthorized access. Our robust security protocols ensure that your cognitive intentions and personal information remain protected and out of reach from any potential threats."}
                    />
                    <SectionCard
                        // icon={<Pattern />}
                        title={"User-Centric Data Control:"}
                        description={"SWith C.H.E.K.I, you are in control of your data. We prioritize user-centric data control, empowering you to manage and regulate the accessibility of your neural data. You decide who can access your cognitive information, ensuring that your privacy remains intact throughout your interaction with our innovative technology."}
                    />
                    <SectionCard
                        // icon={<Action />}
                        title={"Ethical Data Handling Practices"}
                        description={"We adhere to the highest ethical standards when handling your neural data. Our commitment to ethical data practices means that your cognitive information is treated with the utmost respect and care, ensuring that your privacy and confidentiality are maintained in all interactions with C.H.E.K.I."}
                    />
                    <SectionCard
                        // icon={<Loop />}
                        title={"Continuous Security Updates:"}
                        description={"Our dedication to your data security is unwavering. We consistently update our security measures to stay ahead of potential threats, ensuring that your neural data remains secure at all times. Trust in C.H.E.K.I to safeguard your cognitive information and provide you with a seamless and secure user experience."}
                    />
                </div>
            </div>
        </div>
    )
}

export default Privacy