import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";
export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                <img src={"./assets/"+skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}> 
        <li  className={styles.historyItem}>
           <div className={styles.historyItemDetails}>
               <h3>Development</h3>
             <p>Proficient in frontend technologies like React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS, focused on building responsive, user-friendly UIs. Experienced in backend development with Node.js, Express.js, MongoDB, and RESTful APIs, with secure authentication using JWT and Firebase. Skilled in real-time communication via Socket.IO and AI integration using the Cohere API. Comfortable with tools like Axios, Git & GitHub, Postman, and Cloudinary.</p>
           </div>
       </li>
        <li  className={styles.historyItem}>
           <div className={styles.historyItemDetails}>
               <h3>Programming Language and DSA</h3>
             <p>I have experience in Java, JavaScript, and Python, with a strong foundation in Data Structures and Algorithms (JAVA). My problem-solving skills allow me to write efficient and optimized code.</p>
           </div>
       </li>
        <li  className={styles.historyItem}>
           <div className={styles.historyItemDetails}>
               <h3>Different Tools and Technology</h3>
             <p>I have experience working with various tools and technologies such as Version Control & Collaboration: GitHub,System & Command Line: Linux Command Line,Database Management: SQL, DBMS,Core Computer Science Concepts: Operating Systems, Computer Networks.</p>
           </div>
       </li>
        </ul>
      </div>
    </section>
  );
};





// {
//   history.map((historyItem,id)=>{
//    return (
      //  <li key={id} className={styles.historyItem}>
      //      <img src={"./assets/"+historyItem.imageSrc} alt={`${historyItem.organisation} Logo`} ></img>
      //      <div className={styles.historyItemDetails}>
      //          <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
      //        <p>{`${historyItem.startDate}- ${historyItem.endDate}`}</p>
      //       <ul>
      //          {historyItem.experiences.map((experience,id)=>{
      //              return <li key={id}>{experience}</li>
      //          })}
      //       </ul>
      //      </div>
      //  </li>
       
//    )
//   })
//    }