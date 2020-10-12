import React from 'react';
import styles from './AboutMe.module.css'


const AboutMe = () => {

  return  (
    <div className={styles.wrap}>
    <h1 className={styles.title}>Обо мне</h1>
    <span className={styles.label}>Анна Коц - очень старательный человек</span>
    <img src={require("./img/busy.jpg")} alt="busy" style={{margin: "2%", width: "98%"}}/>
    </div>
  );
}

export default AboutMe;
