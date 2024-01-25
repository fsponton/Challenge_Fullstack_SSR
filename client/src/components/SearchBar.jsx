import { Formik, Form, Field, ErrorMessage } from 'formik';
import { searchSchema } from '../utils/_yupSchemas/searchSchema';
import Swal from 'sweetalert2';
import searchPlayerMatches from '../services/searchPlayerMatches';
import { useNavigate } from 'react-router';
import { MatchesContext } from '../contexts/matches-context';
import { useContext } from 'react';

const SearchBar = () => {
    const navigate = useNavigate()
    const { setMatches } = useContext(MatchesContext)

    return (
        <Formik
            initialValues={{
                email: '',
            }}
            validationSchema={searchSchema}
            onSubmit={async (values) => {
                const form = {
                    email: values.email
                }
                const token = sessionStorage.getItem('session')
                const result = await searchPlayerMatches({ form, token })
                if (result.status === "Success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Match added successfully',
                        text: `${result.message}`
                    });
                    setMatches(result.data)
                    navigate('/dashboard');
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: `Match cant be added`,
                        text: `${result.message}`
                    })
                }
            }}
        >
            <Form className=" d-flex" style={{ backgroundColor: "black", color: "#fff", padding: '5px' }}>
                <Field
                    className='form-control me-2'
                    type="text"
                    placeholder="Search by email"
                    name="email"
                />
                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                <button className="btn btn-primary" type="submit">
                    Search
                </button>
            </Form>
        </Formik>
    );
};

export default SearchBar;