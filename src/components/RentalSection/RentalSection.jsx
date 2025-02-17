import React from 'react';
import prokatPhoto from '../../photo/prokat.png';
import styles from './RentalSection.module.css';

function RentalSection(){ 
  return (
    <section className={styles.rentalSection} id="rent">
      <img src={prokatPhoto} alt="Прокат" className={styles.rentalImg} />
      <div>
        <h2 className={styles.h2}>Прокат велосипедов</h2>
        <p className={styles.description}>
          У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!
        </p>
      </div>
    </section>
  );
};

export default RentalSection;

