import React from "react";
import styles from "./Projects.module.css";
export const Projects = () => {
    return <section id="project" className={styles.container}>
        <div className={styles.root}>
            <div><h2 className={styles.title}>Projects</h2></div>
            <div className={styles.projectItems}>
                <div className={styles.Item}>
                    <div className={styles.ItemContent}>
                        <img className={styles.ItemImg} src="assets\projects\project.png"></img>
                        <div className={styles.text}>
                            <h3 className={styles.textTitle}>Car Animation Game</h3>
                            <p className={styles.textPara}>Developed an interactive car animation game with smooth controls and dynamic visuals. Optimized for performance and cross-browser compatibility, ensuring seamless gameplay across different devices and screen sizes.
                            Tools Used: HTML, CSS, JavaScript.
                            </p>
                        </div>
                       
                        <div>
                            <ul className={styles.bt}>
                                <li>
                                    <button onClick={() => window.open("https://github.com/Surya200241/Car-Animation", "_blank")}>
                                        Source
                                    </button>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className={styles.border}></div>
                </div>
                <div className={styles.Item}>
                    <div className={styles.ItemContent}>
                        <img className={styles.ItemImg} src="assets\projects\project.png"></img>
                        <div className={styles.text}>
                            <h3 className={styles.textTitle}>To-Do List</h3>
                            <p className={styles.textPara}>Created a user-friendly task management app with features like task creation, deadlines, and priority settings. Implemented add, edit, delete, and categorize functionalities, along with backend integration for persistent data storage.
                            Tools Used: HTML, CSS, JavaScript</p>
                        </div>
                        
                        <div>
                            <ul className={styles.bt}>
                                <li>
                                    <button onClick={() => window.open("https://github.com/Surya200241/ToDo-List", "_blank")}>
                                        Source
                                    </button>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className={styles.border}></div>
                </div>
                <div className={styles.Item}>
                    <div className={styles.ItemContent}>
                        <img className={styles.ItemImg && styles.img3}  src="assets\projects\project.png"></img>
                        <div className={styles.text}>
                            <h3 className={styles.textTitle}>Netflix Clone </h3>
                            <p className={styles.textPara}> Built a Netflix-inspired UI with a sleek and responsive design, replicating the platform’s modern look. Focused on a structured layout and engaging visuals, showcasing strong frontend development skills.
                            Tools Used: HTML, CSS </p>
                        </div>
                        <div>
                            <ul className={styles.bt}>
                                <li>
                                    <button onClick={() => window.open("https://github.com/Surya200241/Netflix-Clone")}>
                                        Source
                                    </button>
                                </li>
                            </ul>


                        </div>
                    </div>
                    <div className={styles.border}></div>
                </div>


            </div>
        </div>
    </section>;
}