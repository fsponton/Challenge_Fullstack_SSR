import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import { filterMatchesSchema } from '../../utils/_yupSchemas/filterMatchesSchema';
import { useNavigate } from 'react-router';
import { MatchesContext } from '../../contexts/matches-context';
import { useContext } from 'react';
import searchByDate from '../../services/searchByDate';
import formatDate from '../../helpers/formateDate';
import { UserFilteredContext } from '../../contexts/user-filtered-context';
import searchPlayerMatches from '../../services/searchPlayerMatches';
import { PlayersContext } from '../../contexts/players-context';

const FilterByDate = ({ closeModal }) => {
    const navigate = useNavigate()
    const { setMatches } = useContext(MatchesContext)
    const { setUserFiltered } = useContext(UserFilteredContext)
    const { players } = useContext(PlayersContext)

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
                    closeModal()
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
            <Form className="" style={{ backgroundColor: "black", color: "#fff", padding: '5px' }}>
                <div className='row d-flex justify-content-between'>
                    <label className="col-5">
                        Start Date:
                        <Field className="form-control" type="date" name="startDate" />
                        <ErrorMessage name="startDate" component="div" className="text-danger" />
                    </label>
                    <label className="col-5">
                        End Date:
                        <Field className="form-control" type="date" name="endDate" />
                        <ErrorMessage name="endDate" component="div" className="text-danger" />
                    </label>
                </div>
                <label className="col-12 justify-content-center align-items-center mt-3">
                    <Field
                        className='form-control col-3'
                        as="select"
                        placeholder="write email"
                        name="email"
                    >
                        {players.map(player => (
                            player.role === 'PLAYER' ?
                                <option key={player.id} value={player.email}>
                                    {player.email}
                                </option>
                                : null
                        ))}
                    </Field>
                    <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                </label>
                <div className=" d-flex justify-content-center align-items-center">
                    <button className="btn btn-success w-100 mt-4" type="submit">
                        Search
                    </button>
                </div>
            </Form>
        </Formik>
    );
};

export default FilterByDate;