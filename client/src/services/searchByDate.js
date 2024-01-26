import axios from "axios"

export default async function searchByDate({ form, token }) {
    try {
        const response = await axios({
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            method: 'get',
            url: `http://localhost:3000/matches/bydateanduser?startDate=${form.startDate}&endDate=${form.endDate}&emailUser=${form.email}`,

        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}