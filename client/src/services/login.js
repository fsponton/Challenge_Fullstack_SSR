import axios from "axios"

export default async function loginUser(form) {
    try {
        const response = await axios({
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            method: 'post',
            url: 'http://localhost:3000/users/login',
            data: form
        })
        return response
    } catch (error) {
        return error.response
    }
}