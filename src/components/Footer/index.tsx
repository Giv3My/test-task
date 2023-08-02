import React from 'react';

import { menuItems, contacts, socials } from './data';

import logo from '@/assets/images/logo.png';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-wrapper']}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.info}>
          <h5 className={styles.title}>Информация</h5>
          <ul className={styles.list}>
            {menuItems.map((menuItem, index) => (
              <a key={index} href={menuItem.href}>
                <li className={styles.item}>{menuItem.title}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className={styles.contacts}>
          <h5 className={styles.title}>Контакты</h5>
          <ul className={styles.list}>
            {contacts.map((contact, index) => (
              <li key={index} className={styles.item}>
                <span>{contact.icon}</span>
                <p>{contact.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.social}>
          <h5 className={styles.title}>Социальные сети</h5>
          <ul className={styles.list}>
            {socials.map((social, index) => (
              <a key={index} href={social.href}>
                <li className={styles.item}>
                  <span>{social.icon}</span>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2019 Digital Project. Все права защищены.</p>
      </div>
    </footer>
  );
};
