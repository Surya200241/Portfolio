import React from "react";
import styles from './About.module.css';
export function About(){
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src="assets\about\aboutImage.png" alt="Me sitting with a laptop"></img>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src="assets\about\cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemtext}>
                <h3>Frontend Developer</h3>
                <p>
                    I'm a frontend developer with expertise in React, JavaScript, HTML, and CSS,Bootstrap. I focus on creating seamless user experiences and efficient web solutions.
                </p>
            </div>
            </li>
            <li className={styles.aboutItem}><img style={{height:"45px",width:"45px" }} src="assets\about\th.jpg" alt="server img" />
            <div className={styles.aboutItemtext}>
                <h3 className={styles.pr}>Graduation</h3>
                <p className={styles.pr}>
                Currently, I am pursuing my graduation in Information Technology at UIET Kanpur (6th semester), with a CPI of 9.2.I am looking for internship. 
                </p>
            </div>
            </li>
            
            
        </ul>
        </div>
    </section>;
}