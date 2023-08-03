import React from 'react';

import { menuItems, contacts, socials } from './data';

import logo from '@/assets/images/logo.png';
import styles from './Footer.module.scss';
import clsx from 'clsx';

export const Footer: React.FC = () => {
  const accordion1 = React.useRef<HTMLDivElement>(null);
  const accordion2 = React.useRef<HTMLDivElement>(null);

  const toggleAccordion = (ref: React.RefObject<HTMLDivElement>) => () => {
    if (!ref.current) {
      return;
    }

    if (!ref.current.classList.contains(styles.active)) {
      ref.current.classList.add(styles.active);
    } else {
      ref.current.classList.remove(styles.active);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-wrapper']}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div
          ref={accordion1}
          className={clsx(styles.info)}
          onClick={toggleAccordion(accordion1)}
        >
          <h5 className={styles.title}>Информация</h5>
          <ul className={styles.list}>
            {menuItems.map((menuItem, index) => (
              <a key={index} href={menuItem.href}>
                <li className={styles.item}>{menuItem.title}</li>
              </a>
            ))}
          </ul>
        </div>
        <div
          ref={accordion2}
          className={clsx(styles.contacts)}
          onClick={toggleAccordion(accordion2)}
        >
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
