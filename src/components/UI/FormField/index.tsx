import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import clsx from 'clsx';

import styles from './FormField.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldType: 'input';
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  fieldType: 'textarea';
}

type FormFieldProps = {
  className?: string;
  label?: string;
  register?: UseFormRegisterReturn;
  error?: string;
  isRequired?: boolean;
} & (InputProps | TextAreaProps);

export const FormField: React.FC<FormFieldProps> = ({
  fieldType,
  className,
  label,
  error,
  isRequired = false,
  register,
  ...props
}) => {
  return fieldType === 'input' ? (
    <input
      className={clsx(styles.field, className, {
        [styles.error]: error,
      })}
      {...register}
      {...(props as InputProps)}
      placeholder={`${props.placeholder}${isRequired ? '*' : ''}`}
    />
  ) : (
    <textarea
      className={clsx(styles.field, className, {
        [styles.error]: error,
      })}
      {...register}
      {...(props as TextAreaProps)}
      placeholder={`${props.placeholder}${isRequired ? '*' : ''}`}
    />
  );
};
