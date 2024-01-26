import axios from "axios"

export default async function getAllMatches({ token }) {
    try {
        const response = await axios({
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            method: 'get',
            url: `http://localhost:3000/matches/`
        })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}