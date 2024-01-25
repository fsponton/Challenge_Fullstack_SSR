import axios from "axios"

export default async function addMatch({ form, token }) {
    try {
        const response = await axios({
            headers: { Authorization: `Bearer ${token}` },
            method: 'post',
            url: `http://localhost:3000/matches/register`,
            data: form
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}