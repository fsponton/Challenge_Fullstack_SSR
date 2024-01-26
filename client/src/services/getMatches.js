import axios from "axios"

export default async function getMatches({ email, token }) {
    try {
        const response = await axios({
            headers: { Authorization: `Bearer ${token}` },
            method: 'get',
            url: `http://localhost:3000/matches/${email}`
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}