import axios from "axios"

export default async function addUser({ form, token }) {
    try {
        const response = await axios({
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            method: 'post',
            url: `http://localhost:3000/users/register`,
            data: form
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}