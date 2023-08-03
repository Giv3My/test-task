import React from 'react';
import clsx from 'clsx';

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
        <div
          className={clsx(
            styles['connect-img'],
            'animate__animated wow animate__fadeIn animate__delay-1s'
          )}
        >
          <img src={connectImg} alt="connect-img" />
        </div>
      </div>
    </section>
  );
};
