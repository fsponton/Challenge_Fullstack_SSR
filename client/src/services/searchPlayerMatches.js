import axios from "axios"

export default async function searchPlayerMatches({ form, token }) {
    try {
        const response = await axios({
            headers: { Authorization: `Bearer ${token}` },
            method: 'get',
            url: `http://localhost:3000/matches/${form.email}`,

        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}