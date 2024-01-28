import * as Yup from 'yup';

const addMatchSchema = Yup.object().shape({
    playerWin: Yup.string()
        .email('Ingrese una dirección de correo electrónico válida')
        .required('El jugador ganador es requerido'),
    playerLoss: Yup.string()
        .email('Ingrese una dirección de correo electrónico válida')
        .required('El jugador perdedor es requerido'),
    startDate: Yup.date().nullable().required('Start date is required'),
    endDate: Yup.date().nullable().required('End date is required')
        .when('startDate', (startDate, schema) => (
            schema.min(startDate, 'End date must be equal or later than start date')
        )),
    countEnvidos: Yup.number().integer().required('Ingrese un número válido'),
    countWinEnvidos: Yup.number().integer().required('Ingrese un número válido'),
    countFlowers: Yup.number().integer().required('Ingrese un número válido'),
    countWinFlowers: Yup.number().integer().required('Ingrese un número válido'),
});

export default addMatchSchema;