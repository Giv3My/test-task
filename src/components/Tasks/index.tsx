import React from 'react';

import { SectionTitle } from '../UI';
import styles from './Tasks.module.scss';

export const Tasks: React.FC = () => {
  return (
    <section className={styles['tasks-section']}>
      <SectionTitle>Основные задачи</SectionTitle>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <p className={styles['task-number']}>1</p>
          <p className={styles['task-text']}>
            Создание комфортных условий и повышение качества обслуживания клиентов
          </p>
        </div>
        <div className={styles.task}>
          <p className={styles['task-number']}>2</p>
          <p className={styles['task-text']}>
            Постоянно совершенствовать качество предоставляемых услуг путем обучения
            персонала, закупки нового оборудования и усиленной рекламы на рынке
          </p>
        </div>
      </div>
    </section>
  );
};
