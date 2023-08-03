import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';

import { connectSchema } from './validation/schema';

import { Button, FormField } from '@/components/UI';
import { Arrow, CheckMark } from '@/assets/icons';
import styles from './ConnectForm.module.scss';

export const ConnectForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(connectSchema),
  });

  const [isConfirmed, setIsConfirmed] = React.useState(false);
  const [confirmError, setConfirmError] = React.useState(false);

  const toggleConfirmCheckbox = () => {
    if (confirmError) {
      setConfirmError(false);
    }

    setIsConfirmed((prev) => !prev);
  };

  const onSubmit = (values: any) => {
    if (!isConfirmed) {
      setConfirmError(true);
      return;
    }

    console.log(values);
  };

  return (
    <form
      className={clsx(
        styles.form,
        'animate__animated wow animate__fadeIn animate__delay-1s'
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.fields}>
        <FormField
          fieldType="input"
          className={styles.field}
          type="text"
          placeholder="Имя"
          register={register('name')}
        />
        <FormField
          fieldType="input"
          className={styles.field}
          type="text"
          placeholder="Номер телефона"
          register={register('phone')}
          error={errors.phone?.message}
          isRequired
        />
        <FormField
          fieldType="input"
          className={styles.field}
          type="text"
          placeholder="E-mail"
          register={register('email')}
          error={errors.email?.message}
          isRequired
        />
        <FormField
          fieldType="input"
          className={styles.field}
          type="text"
          placeholder="Интересующий товар/услуга"
          register={register('service')}
        />
        <FormField
          fieldType="textarea"
          className={styles.field}
          placeholder="Сообщение"
          register={register('message')}
          error={errors.message?.message}
          isRequired
        />
      </div>
      <div className={styles.confirm}>
        <div
          onClick={toggleConfirmCheckbox}
          className={clsx(styles['confirm-checkbox'], {
            [styles.checked]: isConfirmed,
            [styles.error]: confirmError,
          })}
        >
          <span>
            <CheckMark fill="#fff" />
          </span>
        </div>
        <p>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</p>
      </div>
      <Button
        type="submit"
        className={styles['form-button']}
        icon={<Arrow fill="#fff" />}
      >
        <p>Отправить</p>
      </Button>
    </form>
  );
};
