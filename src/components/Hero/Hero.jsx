import React from "react";
import styles from "./Hero.module.css"
export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hii,I am Surya Pratap Singh</h1>
            <p className={styles.description}>Enthusiastic and detail-oriented Full-Stack Web Developer with strong command of the MERN stack (MongoDB,
Express.js, React, Node.js). Skilled in both front-end and back-end development.</p>
            <a href="http://localhost:5173/#contact" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="assets\hero\surya_photo.jpg" alt="hero image" className={styles.heroImg}></img>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;

};