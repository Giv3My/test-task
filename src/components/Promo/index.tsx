import React from 'react';

import { Button } from '../UI';
import { Arrow } from '@/assets/icons';
import promoBg from '@/assets/images/promo-img.png';
import styles from './Promo.module.scss';

export const Promo: React.FC = () => {
  return (
    <section className={styles['promo-section']}>
      <div className={styles['promo-left']}>
        <div className={styles['promo-title']}>
          <h1 className={styles.title}>Project</h1>
          <span>
            <h1 className={styles.title}>Home</h1>
          </span>
        </div>
        <div className={styles['promo-actions']}>
          <div className={styles['actions-buttons']}>
            <Button className={styles['actions-button']} icon={<Arrow />} />
            <Button className={styles['actions-button']} icon={<Arrow />} />
          </div>
          <div className={styles['promo-pages']}>
            <p className={styles['promo-page']}>01</p>
            <span className={styles['page-sep']} />
            <p className={styles['promo-page']}>02</p>
          </div>
        </div>
      </div>
      <div className={styles['promo-img']}>
        <img src={promoBg} alt="promo-img" />
        <Button className={styles['img-button']} icon={<Arrow />}>
          <p>Взглянуть</p>
        </Button>
      </div>
    </section>
  );
};
