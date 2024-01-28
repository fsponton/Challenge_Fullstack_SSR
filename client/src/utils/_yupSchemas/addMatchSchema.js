import * as Yup from 'yup';

const addMatchSchema = Yup.object().shape({
    playerWin: Yup.string()
        .email('Invalid email')
        .required('Required player won'),
    playerLoss: Yup.string()
        .email('Invalid email')
        .required('Required player lost'),
    startDate: Yup.date().nullable().required('Required start date'),
    endDate: Yup.date().nullable().required('Required end date')
        .when('startDate', (startDate, schema) => (
            schema.min(startDate, 'End date must be equal or later than start date')
        )),
    countEnvidos: Yup.number().integer().required('Required count won envidos'),
    countWinEnvidos: Yup.number().integer().required('Required count won envidos')
        .when('countEnvidos', (countEnvidos, schema) => (
            schema.max(countEnvidos, 'Count win envidos must be more than or equal to count envidos')
        )),
    countFlowers: Yup.number().integer().required('Required count won envidos'),
    countWinFlowers: Yup.number().integer().required('Required count won envidos')
        .when('countFlowers', (countFlowers, schema) => (
            schema.max(countFlowers, 'Count win flowers must be more than or equal to count flowers')
        )),
});

export default addMatchSchema;