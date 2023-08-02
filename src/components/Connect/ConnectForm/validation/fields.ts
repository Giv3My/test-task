import * as yup from 'yup';

export const name = yup.string();

export const phone = yup
  .string()
  .required()
  .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);

export const email = yup.string().required().email();

export const service = yup.string();

export const message = yup.string().required();
