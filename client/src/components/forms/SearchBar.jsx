import { Formik, Form, Field, ErrorMessage } from 'formik';
import { searchSchema } from '../../utils/_yupSchemas/searchSchema';
import Swal from 'sweetalert2';
import getMatchesByUser from '../../services/getMatchesByUser';
import { useNavigate } from 'react-router';
import { MatchesContext } from '../../contexts/matches-context';
import { useContext } from 'react';
import { UserFilteredContext } from '../../contexts/user-filtered-context';

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
            onSubmit={async (values, { resetForm }) => {
                const token = sessionStorage.getItem('session')
                const result = await getMatchesByUser({ email: values.email, token })
                console.log(result)
                if (result.status === "Success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Searched successfully',
                        text: `${result.message}`
                    });
                    setUserFiltered(result.data)
                    setMatches(result.data.wins.concat(result.data.loss))
                    resetForm()
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
            <Form className="row" >
                <div className='col-8 d-flex align-items-center'>
                    <Field
                        className='form-control'
                        type="text"
                        placeholder="Search by email"
                        name="email"
                    />
                    <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                </div>
                <div className="col-4 d-flex justify-content-start align-items-center">
                    <button className="btn btn-primary " type="submit">
                        Search
                    </button>
                </div>
            </Form>
        </Formik >
    );
};

export default SearchBar;