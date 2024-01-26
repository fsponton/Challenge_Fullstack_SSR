import * as Yup from 'yup';

export const userFilterMatchesSchema = Yup.object().shape({
    startDate: Yup.date().nullable().required('Start date is required'),
    endDate: Yup.date().nullable().required('End date is required')
        .when('startDate', (startDate, schema) => (
            schema.min(startDate, 'End date must be equal or later than start date')
        ))
});