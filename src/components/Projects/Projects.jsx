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
                            <h3 className={styles.textTitle}>Quick-Chat-App</h3>
                            <p className={styles.textPara}>Real-Time Chat Application built using React, Node.js, Express, and MongoDB, designed to enable seamless one-on-one messaging between authenticated users. Integrated Socket.IO for real-time bi-directional communication, enabling instant message delivery and live updates.JWT-based authentication for secure login and signup.
                            </p>
                        </div>

                        <div>
                            <ul className={styles.bt}>
                                <li>
                                    <button onClick={() => window.open("https://github.com/Surya200241/chat-app", "_blank")}>
                                        Source
                                    </button>

                                    <button onClick={() => window.open("https://chat-app-murex-iota-77.vercel.app/", "_blank")}>
                                        Live
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
                            <h3 className={styles.textTitle}>ResumeRadar</h3>
                            <p className={styles.textPara}>Developed an AI-powered resume screening app using the MERN stack that analyzes resumes against job descriptions, provides matching scores and feedback on missing skills, supports Google login, maintains user history, and includes an admin dashboard for managing users and submissions.AI-driven resume analysis with job match scoring, skill-gap feedback, Firebase Google authentication, resume screening history, responsive UI, and admin panel for user and resume management.Tech Stack:

                                React, Node.js, Express, MongoDB, Tailwind CSS, Firebase (Google Auth), Axios
                            </p>
                        </div>

                        <div>
                            <ul className={styles.bt}>
                                <li>
                                    <button onClick={() => window.open("https://github.com/Surya200241/ResumeRadar", "_blank")}>
                                        Source
                                    </button>

                                    <button onClick={() => window.open("https://resume-radar-indol.vercel.app/", "_blank")}>
                                        Live
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
                            <h3 className={styles.textTitle}>AI-Assistant</h3>
                            <p className={styles.textPara}>AI Assistant Web Application (React + Gemini API) Tech Stack: React.js, JavaScript (ES6), HTML5, CSS3, Media
                                Queries, Gemini Free API, Fetch API.Developed a responsive, single-page AI assistant web app using React, enabling users to interact with this
                                assistant. Implemented real-time Question and Answer functionality by integrating Gemini Free API using Fetch
                                API with robust error handling and user feedback.
                            </p>
                        </div>

                        <div>
                            <ul className={styles.bt}>
                                <li>
                                    <button onClick={() => window.open("https://github.com/Surya200241/AI-Assistant", "_blank")}>
                                        Source
                                    </button>

                                    <button onClick={() => window.open("https://assistant-tool.netlify.app/", "_blank")}>
                                        Live
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
                        <img className={styles.ItemImg && styles.img3} src="assets\projects\project.png"></img>
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