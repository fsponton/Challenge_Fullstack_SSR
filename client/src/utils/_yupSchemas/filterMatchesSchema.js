import * as Yup from 'yup';

export const filterMatchesSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email address'),
    startDate: Yup.date().nullable().required('Start date is required'),
    endDate: Yup.date().nullable().required('End date is required')
        .when('startDate', (startDate, schema) => (
            schema.min(startDate, 'End date must be equal or later than start date')
        ))
});