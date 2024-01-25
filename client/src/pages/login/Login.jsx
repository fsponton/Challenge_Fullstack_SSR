import { useNavigate } from 'react-router';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loginSchema } from '../../utils/_yupSchemas/loginSchema.js';
import loginUser from '../../services/login.js';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { LoadingContext } from '../../contexts/loading-context.jsx';

const LoginForm = () => {
    const navigate = useNavigate();
    const { setLoading } = useContext(LoadingContext)

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{ backgroundColor: 'black' }}>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ border: "border-radius: 2rem" }}>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={loginSchema}
                                onSubmit={async values => {
                                    const form = {
                                        email: values.email,
                                        password: values.password,
                                    }
                                    const result = await loginUser(form)
                                    if (result.data.status === "Success") {
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'User loged successfully',
                                            text: `${result.data.message}`
                                        });
                                        setLoading(true)
                                        sessionStorage.setItem('session', result.data.authorization)
                                        navigate('/dashboard');
                                        return
                                    }
                                    Swal.fire({
                                        icon: 'error',
                                        title: `User Cant be loged`,
                                        text: `${result.data.message}`
                                    })

                                }}
                            >
                                <Form className='card-body p-5 text-center'>
                                    <div className="form-outline mb-4 ">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <Field className="form-control" id="email" name="email" />
                                        <ErrorMessage name="email" component="div" className="text-danger" />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label htmlFor="password" className="form-label">Password:</label>
                                        <Field className="form-control" id="password" name="password" type="password" />
                                        <ErrorMessage name="password" component="div" className="text-danger" />
                                    </div>



                                    <button className="btn btn-success btn-block  w-100" type="submit"  >Iniciar sesion</button>

                                    <div className="mt-4  d-flex justify-content-center   ">

                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default LoginForm;