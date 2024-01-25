import axios from "axios"

export default async function searchByDate({ form, token }) {
    try {
        const response = await axios({
            headers: { Authorization: `Bearer ${token}` },
            method: 'get',
            url: `http://localhost:3000/matches/bydate?startDate=${form.startDate}&endDate=${form.endDate}`,

        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}