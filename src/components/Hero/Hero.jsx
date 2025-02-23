import React from "react";
import styles from "./Hero.module.css"
export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hii,I am Surya</h1>
            <p className={styles.description}>I am a frontend developer.I have experience in React, I create responsive and user-friendly interfaces that enhance the user experience</p>
            <a href="http://localhost:5173/#contact" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="assets\hero\surya.jpg" alt="hero image" className={styles.heroImg}></img>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;

};