import React from 'react';
import dinophoto from '../../photo/dino.png';
import styles from './OfferSection.module.css';

function OfferSection(){
  return (
    <section className={styles.offerSection}>
      <h1 className={styles.title}>Веломастерская "Велозар"</h1>
      <p className={styles.description}>
        Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.
      </p>
      <img
        src={dinophoto}
        alt="Dino"
        className={styles.offerDinoPhoto}
        width="350"
        height="350"
      />
    </section>
  );
};

export default OfferSection;
