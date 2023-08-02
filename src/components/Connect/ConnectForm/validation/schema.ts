import * as yup from 'yup';
import * as fields from './fields';

export const connectSchema = yup.object().shape({
  name: fields.name,
  phone: fields.phone,
  email: fields.email,
  service: fields.service,
  message: fields.message,
});
