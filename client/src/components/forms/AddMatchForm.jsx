import { useNavigate } from "react-router";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import addMatchSchema from "../../utils/_yupSchemas/addMatchSchema.js"
import addMatch from '../../services/addMatch.js';
import getAllMatches from "../../services/getAllMatches.js";
import { MatchesContext } from "../../contexts/matches-context.jsx";
import { useContext } from "react";
import formatDate from "../../helpers/formateDate.js";

const AddMatchForm = ({ closeModal }) => {
    const navigate = useNavigate()
    const { setMatches } = useContext(MatchesContext)

    return (

        <Formik initialValues={{
            playerWin: '',
            playerLoss: '',
            startDate: formatDate(new Date),
            endDate: formatDate(new Date),
            countEnvidos: 0,
            countWinEnvidos: 0,
            countFlowers: 0,
            countWinFlowers: 0
        }}
            validationSchema={addMatchSchema}
            onSubmit={async (values, { resetForm }) => {
                const form = {
                    playerWin: values.playerWin,
                    playerLoss: values.playerLoss,
                    start_date: values.startDate,
                    end_date: values.endDate,
                    countEnvidos: values.countEnvidos,
                    countWinEnvidos: values.countWinEnvidos,
                    countFlowers: values.countFlowers,
                    countWinFlowers: values.countWinFlowers
                }
                const token = sessionStorage.getItem('session')
                const result = await addMatch({ form, token })
                if (result.status === "Success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Match added successfully',
                        text: `${result.message}`
                    });
                    const response = await getAllMatches({ token })
                    setMatches(response.data)
                    resetForm();
                    closeModal()
                    navigate('/dashboard')
                    return
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: `Match cant be added`,
                        text: `${result.message}`
                    })
                }
            }}>
            <Form style={{ background: '#000', padding: '20px', borderRadius: '8px', color: '#fff' }}>
                <div className="row">
                    <label className="col-6">
                        Email Player Win:
                        <Field className="form-control" type="text" name="playerWin" />
                        <ErrorMessage name="playerWin" component="div" className="text-danger" />
                    </label>
                    <label className="col-6">
                        Email Player Loss:
                        <Field className="form-control" type="text" name="playerLoss" />
                        <ErrorMessage name="playerLoss" component="div" className="text-danger" />
                    </label>
                    <label className="col-6">
                        Start Date:
                        <Field className="form-control" type="date" name="startDate" />
                        <ErrorMessage name="startDate" component="div" className="text-danger" />
                    </label>
                    <label className="col-6">
                        End Date:
                        <Field className="form-control" type="date" name="endDate" />
                        <ErrorMessage name="endDate" component="div" className="text-danger" />
                    </label>
                    <label className="col-6">
                        Count Envidos:
                        <Field className="form-control" type="number" name="countEnvidos" />
                        <ErrorMessage name="countEnvidos" component="div" className="text-danger" />
                    </label>
                    <label className="col-6">
                        Count Win Envidos:
                        <Field className="form-control" type="number" name="countWinEnvidos" />
                        <ErrorMessage name="countWinEnvidos" component="div" className="text-danger" />
                    </label>
                    <label className="col-6">
                        Count Flowers:
                        <Field className="form-control" type="number" name="countFlowers" />
                        <ErrorMessage name="countFlowers" component="div" className="text-danger" />
                    </label>
                    <label className="col-6">
                        Count Win Flowers:
                        <Field className="form-control" type="number" name="countWinFlowers" />
                        <ErrorMessage name="countWinFlowers" component="div" className="text-danger" />
                    </label>
                </div>
                <button className="btn btn-success btn-block mt-4 w-100" type="submit">Submit</button>
            </Form>
        </Formik >
    );
};

export default AddMatchForm;