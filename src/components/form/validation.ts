import * as yup from 'yup';

export const schema = yup.object({
  email: yup.string().required('Обязательное поле'),
  password: yup.string().required('Обязательное поле'),
}).required();

export type Data=yup.InferType<typeof schema>;