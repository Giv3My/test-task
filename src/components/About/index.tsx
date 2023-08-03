import React from 'react';

import { Button, SectionTitle } from '../UI';
import { Arrow } from '@/assets/icons';
import about_1 from '@/assets/images/about-1.png';
import about_2 from '@/assets/images/about-2.png';
import about_3 from '@/assets/images/about-3.png';
import styles from './About.module.scss';

export const About: React.FC = () => {
  return (
    <section className={styles['about-section']}>
      <div className={styles.images}>
        <img
          className="animate__animated wow animate__fadeInDown"
          src={about_1}
          alt="about_1"
        />
        <img
          className="animate__animated wow animate__fadeInDown animate__delay-0.5s"
          src={about_2}
          alt="about_2"
        />
        <img
          className="animate__animated wow animate__fadeInDown animate__delay-0.5s"
          src={about_3}
          alt="about_3"
        />
      </div>
      <div className={styles.about}>
        <SectionTitle>О компании</SectionTitle>
        <p className={styles['about-text']}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
        <Button className={styles['about-button']} icon={<Arrow />}>
          <p>Читать</p>
        </Button>
      </div>
    </section>
  );
};
