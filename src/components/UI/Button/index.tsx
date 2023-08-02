import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  icon,
  children,
  ...props
}) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
};
