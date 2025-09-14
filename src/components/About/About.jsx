import React from "react";
import styles from './About.module.css';
export function About(){
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src="assets\hero\surya_photo.jpg" alt="Me sitting with a laptop"></img>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src="assets\about\cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemtext}>
                <h3>Web Developer</h3>
                <p>
                    Proficient in React, JavaScript (ES6+), Node.js, Express, MongoDB, RESTful APIs, JWT/Firebase authentication, Socket.IO, Cohere API, Tailwind CSS, and tools like Axios, Git, Postman, and Cloudinary.
                </p>
            </div>
            </li>
            <li className={styles.aboutItem}><img style={{height:"45px",width:"45px" }} src="assets\about\th.jpg" alt="server img" />
            <div className={styles.aboutItemtext}>
                <h3 className={styles.pr}>Graduation</h3>
                <p className={styles.pr}>
                Currently, I am pursuing my graduation in Information Technology at UIET Kanpur (7th semester), with a CPI of 9.0 .I am looking for internship. 
                </p>
            </div>
            </li>
            
            
        </ul>
        </div>
    </section>;
}