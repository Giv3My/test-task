import React from 'react';

import { ConnectForm } from './ConnectForm';
import { SectionTitle } from '../UI';
import connectImg from '@/assets/images/connect-img.png';
import styles from './Connect.module.scss';

export const Connect: React.FC = () => {
  return (
    <section className={styles['connect-section']}>
      <SectionTitle>Связаться с нами</SectionTitle>
      <div>
        <ConnectForm />
        <div className={styles['connect-img']}>
          <img src={connectImg} alt="connect-img" />
        </div>
      </div>
    </section>
  );
};
