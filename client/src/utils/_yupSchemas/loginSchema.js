import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('El email es requerido'),
    password: Yup.string()
        .min(8, 'La password debe tener al menos 8 caracters')
        .required('La password es requerida'),
});