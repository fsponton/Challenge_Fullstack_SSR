import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userFilterMatchesSchema } from '../utils/_yupSchemas/userFilterMatchesSchema';
import Swal from 'sweetalert2';
import userSearchByDate from '../services/userSearchByDate';
import { useNavigate } from 'react-router';
import { MatchesContext } from '../contexts/matches-context';
import { useContext } from 'react';
import { UserContext } from '../contexts/user-context';
import formatDate from '../helpers/formateDate';

const UserFilterMatches = () => {
    const navigate = useNavigate()
    const { setMatches } = useContext(MatchesContext)
    const { userData } = useContext(UserContext)

    return (
        <Formik
            initialValues={{
                startDate: formatDate(new Date()),
                endDate: formatDate(new Date())
            }}
            validationSchema={userFilterMatchesSchema}
            onSubmit={async (values) => {
                const form = {
                    email: userData.email,
                    startDate: values.startDate,
                    endDate: values.endDate
                }
                const token = sessionStorage.getItem('session')
                const result = await userSearchByDate({ form, token })
                if (result.status === "Success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Matches filtered',
                        text: `${result.message}`
                    });
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
            <Form>
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
                <button className="btn btn-primary" type="submit">
                    Search
                </button>
            </Form>
        </Formik >
    );
};

export default UserFilterMatches;