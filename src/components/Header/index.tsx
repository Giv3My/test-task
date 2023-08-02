import React from 'react';
import clsx from 'clsx';

import { menuItems } from './data';

import { Logo } from '@/assets/icons';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(styles.header, {
        [styles.sticky]: isScrolled,
      })}
    >
      <div className={styles['header-wrapper']}>
        <div className={styles.logo}>
          <a href="#">
            <Logo />
          </a>
        </div>
        <div className={styles.navbar}>
          <ul className={styles['nav-items']}>
            {menuItems.map((menuItem, index) => (
              <a key={index} href={menuItem.href}>
                <li className={styles['nav-item']}>{menuItem.title}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
