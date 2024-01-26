import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import { filterMatchesSchema } from '../utils/_yupSchemas/filterMatchesSchema';
import { useNavigate } from 'react-router';
import { MatchesContext } from '../contexts/matches-context';
import { useContext } from 'react';
import searchByDate from '../services/searchByDate';
import formatDate from '../helpers/formateDate';
import { UserFilteredContext } from '../contexts/user-filtered-context';
import searchPlayerMatches from '../services/searchPlayerMatches';

const ConsultantFilterMatches = () => {
    const navigate = useNavigate()
    const { setMatches } = useContext(MatchesContext)
    const { setUserFiltered } = useContext(UserFilteredContext)

    return (
        <Formik
            initialValues={{
                email: '',
                startDate: formatDate(new Date()),
                endDate: formatDate(new Date())
            }}
            validationSchema={filterMatchesSchema}
            onSubmit={async (values) => {
                const form = {
                    email: values.email,
                    startDate: values.startDate,
                    endDate: values.endDate
                }
                const token = sessionStorage.getItem('session')
                const result = await searchByDate({ form, token })
                const result2 = await searchPlayerMatches({ form, token })
                if (result.status === "Success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Matches filtered',
                        text: `${result.message}`
                    });
                    setUserFiltered(result2.data)
                    setMatches(result.data)
                    navigate('/dashboard');
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: `Matches cant be filtered`,
                        text: `${result.message}`
                    })
                }
            }}
        >
            <Form className=" d-flex" style={{ backgroundColor: "black", color: "#fff", padding: '5px' }}>
                <label className="me-2">
                    Start Date:
                    <Field className="form-control" type="date" name="startDate" />
                    <ErrorMessage name="startDate" component="div" className="text-danger" />
                </label>
                <label className="me-2">
                    End Date:
                    <Field className="form-control" type="date" name="endDate" />
                    <ErrorMessage name="endDate" component="div" className="text-danger" />
                </label>
                <Field
                    className='form-control me-2'
                    type="text"
                    placeholder="write email"
                    name="email"
                />
                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                <button className="btn btn-primary " type="submit">
                    Search
                </button>
            </Form>
        </Formik>
    );
};

export default ConsultantFilterMatches;