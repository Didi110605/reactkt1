import React from 'react';
import iconPhoto from '../../photo/icon.png';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={iconPhoto} alt="Логотип Велозо" width="120" />
      </div>
      <nav className={styles.nav}>
        <a href="#about">О нас</a>
        <a href="#services">Услуги</a>
        <a href="rental">Аренда</a>
      </nav>
      <button className={styles.headerButton}>Связаться</button>
    </header>
  );
};

export default Header;