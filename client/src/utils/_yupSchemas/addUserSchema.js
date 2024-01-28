import * as Yup from 'yup';

const addUserSchema = Yup.object().shape({
    full_name: Yup.string().required('El nombre completo es requerido'),
    email: Yup.string().email('Ingrese una dirección de correo electrónico válida').required('El email es requerido'),
    password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es requerida'),
    role: Yup.string().required('El rol es requerido'),
});

export default addUserSchema;