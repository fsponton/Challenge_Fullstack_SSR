import { Formik, Form, Field, ErrorMessage } from 'formik';
import { searchSchema } from '../utils/_yupSchemas/searchSchema';
import Swal from 'sweetalert2';
import searchPlayerMatches from '../services/searchPlayerMatches';
import { useNavigate } from 'react-router';
import { MatchesContext } from '../contexts/matches-context';
import { useContext } from 'react';
import { UserFilteredContext } from '../contexts/user-filtered-context';

const SearchBar = () => {
    const navigate = useNavigate()
    const { setMatches } = useContext(MatchesContext)
    const { setUserFiltered } = useContext(UserFilteredContext)

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
                    setUserFiltered(result.data)
                    setMatches(result.data.wins.concat(result.data.loss))
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