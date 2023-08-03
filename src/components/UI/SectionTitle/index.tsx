import clsx from 'clsx';
import React from 'react';

import styles from './SectionTitle.module.scss';

interface SectionTitleProps extends React.PropsWithChildren {
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ className, children }) => {
  return <h2 className={clsx(className, styles['section-title'])}>{children}</h2>;
};
