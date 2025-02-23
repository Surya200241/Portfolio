import React from "react";
import styles from './Contact.module.css';
export const Contact = () => {
    return <section id="contact" className={styles.container}>
        <div className={styles.root}>
            <div className={styles.contact}>
                <div className={styles.title}>
                    <h1>Contact</h1>
                    <p>Feel free to reach out!</p>
                </div>
                <div className={styles.Item} >
                    <ul>
                        <li>
                            <img src="assets\contact\emailIcon.png"></img>
                            <p>Kingall37521@gmail.com</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="assets\contact\githubIcon.png"></img>
                            <p>https://github.com/Surya200241</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="assets\contact\linkedinIcon.png"></img>
                            <p>https://www.linkedin.com/in/surya-pratap-singh-310796227/</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.border}>

            </div>
        </div>
    </section>;
};