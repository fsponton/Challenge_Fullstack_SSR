import axios from "axios"

export default async function getAllPlayers({ token }) {
    try {
        const response = await axios({
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            method: 'get',
            url: `http://localhost:3000/users`
        })
        return response.data.data
    } catch (error) {
        return error.response.data
    }
}