import { Formik, Form, Field, ErrorMessage } from 'formik';
import addUser from '../services/addUser';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import userSchema from '../utils/_yupSchemas/userSchema';

const AddUserForm = () => {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                full_name: '',
                email: '',
                password: '',
                role: '',
            }}
            validationSchema={userSchema}
            onSubmit={async (values) => {
                const form = {
                    full_name: values.full_name,
                    email: values.email,
                    password: values.password,
                    role: values.role,
                }
                const token = sessionStorage.getItem('session')
                const result = await addUser({ form, token });
                if (result.status === 'Success') {
                    Swal.fire({
                        icon: 'success',
                        title: `User ${form.email} added `,
                        text: `${result.message}`,
                    });
                    navigate('/dashboard')
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: `Error when try add user: ${result.name}`,
                        text: `${result.message}`,
                    })
                }
            }
            }
        >
            <Form style={{ background: '#000', padding: '20px', borderRadius: '8px', color: '#fff' }}>
                <label>
                    Nombre completo:
                    <Field className="form-control" type="text" name="full_name" />
                    <ErrorMessage name="full_name" component="div" className="text-danger" />
                </label>
                <br />
                <label>
                    Email:
                    <Field className="form-control" type="text" name="email" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                </label>
                <br />
                <label>
                    Contraseña:
                    <Field className="form-control" type="password" name="password" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                </label>
                <br />
                <label>
                    Rol:
                    <Field className="form-control" as="select" name="role">
                        <option value="" disabled>
                            Rol
                        </option>
                        <option value="PLAYER">Player</option>
                        <option value="ADMIN">Admin</option>
                        <option value="CONSULTANT">Consultant</option>
                    </Field>
                    <ErrorMessage name="role" component="div" className="text-danger" />
                </label>
                <br />
                <button className="btn btn-success btn-block w-100" type="submit">Agregar Usuario</button>
            </Form>
        </Formik >
    );
};

export default AddUserForm;