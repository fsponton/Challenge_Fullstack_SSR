import * as Yup from 'yup';

export const searchSchema = Yup.object({
    email: Yup.string().email('Ingrese una dirección de correo electrónico válida').required('Email required'),
})


