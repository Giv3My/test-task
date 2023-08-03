import React from 'react';

import { projectImages } from './data';

import { SectionTitle, Button } from '../UI';
import { Arrow } from '@/assets/icons';
import styles from './Projects.module.scss';

export const Projects: React.FC = () => {
  return (
    <section className={styles['projects-section']}>
      <SectionTitle>Наши проекты</SectionTitle>
      <div className={styles.projects}>
        {projectImages.map((img, index) => (
          <div key={index} className={styles.project}>
            <img src={img} alt={`project_${index + 1}`} />
            {index === 0 && (
              <div className={styles.details}>
                <div className={styles['details-wrapper']}>
                  <h1 className={styles['details-title']}>Досуговый центр</h1>
                  <Button
                    className={styles['details-button']}
                    icon={<Arrow fill="#fff" />}
                    animate={false}
                  >
                    <p>Подробнее</p>
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <Button className={styles['projects-button']} icon={<Arrow fill="#fff" />}>
        <p>Все проекты</p>
      </Button>
    </section>
  );
};
