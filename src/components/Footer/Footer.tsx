import React, { useState } from 'react';
import styles from './Footer.module.scss';
import CustomButton from '../Button';
import Logo from "../../../public/blueLogo.svg"
import VectorBG from "../../../public/FooterBG.svg"
import { useRouter } from 'next/router';

const Footer = () => {
    const [email, setEmail] = useState("");
    const router = useRouter()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        router.reload()        
    }

    const handleJoinWaitList = () => {
        // setloading to true
        // open connection and send email -- possibly use Firebase
        // get success status back
        // open up modal
        // show status and message
        // set loading to false
    }
    return (
        <footer className={styles.footer}>
            <h2>Unlock Your Mind&apos;s Potential</h2>
            <p style={{ textAlign: "center" }}>Join the vibrant C.H.E.K.I community today and be a part of the innovation revolution, where your thoughts effortlessly become actions, creativity knows no bounds, and the future of human-computer interaction is redefined. Unleash the true potential of your mind, shaping a world where technology seamlessly integrates with your cognitive abilities, empowering you to achieve more, innovate faster, and create a more inclusive and accessible society. Embrace the boundless realm of creativity, discover the transformative power of C.H.E.K.I, and join hands to pave the way for a future where the fusion of mind and machine unlocks unprecedented possibilities.</p>

            <div className={styles.inputWrapper}>
                <div className={styles.inputContainer} id="sign-up">
                    <input value={email} onChange={handleEmailChange} placeholder='Enter your email' />
                    <button className={styles.emailButton} onClick={handleSubmit}>JOIN THE WAITLIST</button>
                    {/* <Button title={"JOIN THE WAITLIST"} buttonAction={handleJoinWaitList} /> */}
                </div>
            </div>

            <div className={styles.titleContainer}>
                <Logo />
                <h1>C.H.E.K.I</h1>
            </div>
            <p className={styles.imagineItText}>IMAGINE IT. BECOME IT.</p>

            <div className={styles.footerBottom} style={{position: "absolute", bottom: 16}}>
                <span>C.H.E.K.I © 2023</span>
                <span>Terms and Policies</span>
                <span>LinkedIn</span>
            </div>
        </footer>
    );
};

export default Footer;