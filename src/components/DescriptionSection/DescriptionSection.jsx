import React from 'react';
import masterPhoto from '../../photo/master.png';
import styles from './DescriptionSection.module.css';

function DescriptionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
       <h2 className={styles.title}>Что мы предлагаем?</h2>
        <p className={styles.text}>
          В нашей мастерской можно выполнить 
          комплексное техническое обслуживание 
          велосипеда, ремонт и настройку всех его узлов, 
          шиномонтажные работы. Вовремя проведенное 
          ТО велосипеда помогает избежать многих 
          проблем и дорогого ремонта.  
          Все работы выполняем качественно и с душой.
        </p>
        </div>
        <img src={masterPhoto} alt="Мастерская" className={styles.image}/>
    </section>
  );
};

export default DescriptionSection;