import React from 'react';
import styles from './Contacts.module.css'


const Contacts = () => {
//Для иконок социальных сетей и мессенджеров можно использовать сайт flaticon.
  return  (
    <div className={styles.wrap}>
      <header>
        <h1 className={styles.title}>Контакты</h1>
        <h3 className={styles.subtitle}>Анна Коц</h3>
      </header>
      <span className={styles.label}>
        <img src={'/images/phone-call.png'} alt='phone' className={styles.img}/>
        <address className={styles.address}>  +7(915)340-36-44</address>
      </span>
      <span className={styles.label}>
        <img src={'/images/yandex.png'} alt='yandex' className={styles.img}/>
        <address className={styles.address}>  kotsionova@yandex.ru</address>
      </span>
      <span className={styles.label}>
        <img src={'/images/city-map-colored.png'} alt='city' className={styles.img}/>
        <address className={styles.address}>  г.Москва</address>
      </span>
      <span className={styles.label}>
        <img src={'/images/vk.png'} alt='vk' className={styles.img}/>
        <address className={styles.address}>
          <a href='https://vk.com/annie_kot'> https://vk.com/annie_kot</a>
        </address>
      </span>
      <span className={styles.label}>
        <img src={'/images/instagram.png'} alt='insta' className={styles.img}/>
        <address className={styles.address}>
          <a href='https://www.instagram.com/anna__kots/'> https://www.instagram.com/anna__kots/</a>
        </address>
      </span>
    </div>
  );
}

export default Contacts;
