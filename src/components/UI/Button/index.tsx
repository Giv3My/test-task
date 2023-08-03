import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: React.ReactNode;
  animate?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  icon,
  children,
  animate = true,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.animate]: animate,
      })}
      {...props}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
};
