import axios from "axios"

export default async function getByRanking({ token }) {
    try {
        const response = await axios({
            headers: { Authorization: `Bearer ${token}` },
            method: 'get',
            url: `http://localhost:3000/matches/ranking`
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}